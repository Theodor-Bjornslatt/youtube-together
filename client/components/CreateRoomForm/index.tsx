import { useState } from 'react'
import { useRouter } from 'next/router'

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
import Playlist from '../Playlist'
import Header from '../Header'
import play from '../../public/play.svg'
import { TextInput } from '../inputs/TextInput'
import { Form } from './CreateRoomForm.styled'
import { PlaylistItemData } from '../../types'
import { apiPostRoom } from '../../utils/api'

export default function CreateRoomForm() {
  const { values, errors, onChangeHandler, handleSubmit } = useForm(
    onClickHandler,
    {
      name: '',
      nickname: ''
    },
    validateCreateRoom
  )
  const [playlist, setPlaylist] = useState<PlaylistItemData[]>([])
  const router = useRouter()

  function onClickHandler() {
    async function postRoom() {
      const room = {
        name: values.name,
        nickname: values.nickname,
        playlist
      }

      try {
        await apiPostRoom(room)
      } catch (error) {
        console.log('error', error)
        return
      }
      router.push(`room/${values.name}`)
    }

    postRoom()
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
            <TextInput
              label="Create a nickname for the people watching"
              name="nickname"
              value={values.nickname}
              error={errors.nickname}
              onChange={onChangeHandler}
            />
          </Form>
          <PlaylistHeightContainer>
            <Playlist playlist={playlist} setPlaylist={setPlaylist} />
          </PlaylistHeightContainer>
          <SubmitButton onClick={onClickHandler}>
            <h5>START WATCHING TOGETHER</h5>
            <NextImage src={play} width={34} height={34} />
          </SubmitButton>
        </CreateRoomFlexContainer>
      </CreateRoomMaxContainer>
    </CreateRoomFormContainer>
  )
}
