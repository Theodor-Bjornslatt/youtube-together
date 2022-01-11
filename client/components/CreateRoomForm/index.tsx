import { useState } from 'react'

import { useForm } from '../../hooks/useForm'
import { validateCreateRoom } from '../../utils/formValidationRules'
import {
  SubmitButton,
  CreateRoomFormContainer,
  CreateRoomMaxContainer,
  CreateRoomFlexContainer,
  PlaylistHeightContainer
} from './CreateRoomForm.styled'
import NextImage from '../NextImage'
import Playlist, { PlayItem } from '../Playlist'
import play from '../../public/play.svg'
import { useSockets } from '../../state/SocketContext'
import { User } from '../../state/GlobalState'
import { TextInput } from '../inputs/TextInput'
import { Form } from './CreateRoomForm.styled'
import Header from '../Header'

// type PlaceHolderType = {
//   id: number
//   name: string
// }

type CreateRoomProps = {
  user: User | null
}

export default function CreateRoomForm({ user }: CreateRoomProps) {
  const { values, errors, onChangeHandler, handleSubmit } = useForm(
    onClickHandler,
    {
      name: '',
      url: ''
    },
    validateCreateRoom
  )
  const { socket } = useSockets()
  const [playlist, setPlaylist] = useState<PlayItem[]>([
    { id: '1', name: 'HEJ NDWEKLFNE' }
  ])

  // @TODO handle creation of room
  // @TODO evolve playlist component

  async function onClickHandler() {
    // const room = { name: values.name, playlist: playlist }
    // const res = await fetch('http://localhost:8080/api/rooms/playlist', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   credentials: 'include',
    //   body: JSON.stringify(room)
    // })
    // console.log('res :>> ', res)

    socket?.emit('join', {
      name: values.name,
      username: user?.username,
      color: user?.color
    })
  }

  return (
    <CreateRoomFormContainer>
      <Header title={'Create Room'} />
      <CreateRoomMaxContainer>
        <CreateRoomFlexContainer>
          <Form onSubmit={handleSubmit}>
            <TextInput
              label="Name your room"
              name="name"
              value={values.name}
              error={errors.name}
              onChange={onChangeHandler}
            />
          </Form>
          <PlaylistHeightContainer>
            <Playlist playlist={playlist} setPlaylist={setPlaylist} />
          </PlaylistHeightContainer>
          <SubmitButton onClick={handleSubmit}>
            <h5>START WATCHING TOGETHER</h5>
            <NextImage src={play} width={34} height={34} />
          </SubmitButton>
        </CreateRoomFlexContainer>
      </CreateRoomMaxContainer>
    </CreateRoomFormContainer>
  )
}
