import React, { useContext, useState } from 'react'

import { useForm } from '../../hooks/useForm'
import {
  validateCreateRoom,
  validateUrl
} from '../../utils/formValidationRules'
import { SubmitButton, Container } from './CreateRoomForm.styled'
import NextImage from '../NextImage'
import Playlist from '../Playlist'
import play from '../../public/play.svg'
import MaxWidthContainer from '../MaxWidthContainer'
import CreateForm from './CreateForm'
import { useSockets } from '../../state/SocketContext'
import { GlobalContext } from '../../state/GlobalState'

type PlaceHolderType = {
  id: number
  name: string
}

export default function CreateRoomForm() {
  const { values, errors, onChangeHandler, handleSubmit } = useForm(
    onClickHandler,
    {
      name: '',
      url: ''
    },
    validateCreateRoom
  )
  const {
    state: { user }
  } = useContext(GlobalContext)
  const { socket } = useSockets()

  const [playlist, setPlaylist] = useState<PlaceHolderType[]>([])
  const [id, setId] = useState(1)

  async function onClickHandler() {
    const room = { name: values.name, playlist: playlist }
    const res = await fetch('http://localhost:8080/api/rooms/playlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(room)
    })

    console.log('res :>> ', res)

    socket?.emit('join', {
      name: values.name,
      username: user?.username,
      color: user?.color
    })
  }

  const addToPlaylist = () => {
    if (!validateUrl(values.url)) return
    const obj = { name: values.url, id }
    setPlaylist((old) => [...old, obj])
    setId((old) => old++)
  }

  return (
    <Container>
      <MaxWidthContainer>
        <CreateForm
          onChangeHandler={onChangeHandler}
          values={values}
          errors={errors}
          addToPlaylist={addToPlaylist}
        />
      </MaxWidthContainer>
      <MaxWidthContainer>
        <h5>Order your playlist</h5>
        <Playlist playlist={playlist} setPlaylist={setPlaylist}></Playlist>
        <SubmitButton onClick={handleSubmit}>
          <h5>START WATCHING TOGETHER</h5>
          <NextImage src={play} width={34} height={34} />
        </SubmitButton>
      </MaxWidthContainer>
    </Container>
  )
}
