import { useState } from 'react'
import { useRouter } from 'next/router'

import { useForm } from '../../hooks/useForm'
import { validateCreateRoom } from '../../utils/formValidationRules'
import {
  SubmitButton,
  CreateRoomFormContainer,
  CreateRoomMaxContainer,
  CreateRoomFlexContainer,
  PlaylistHeightContainer,
  TextWithIconContainer
} from './CreateRoomForm.styled'
import NextImage from '../NextImage'
import Playlist from '../Playlist'
import Header from '../Header'
import play from '../../public/play.svg'
import { TextInput } from '../inputs/TextInput'
import { Form } from './CreateRoomForm.styled'
import { PlaylistItemData, PostRoomData } from '../../types'
import { apiPostRoom } from '../../utils/api'
import { sizes } from '../../styles/variables'
import { useWindowSize } from '../../hooks/useWindowSize'

export default function CreateRoomForm() {
  const initialRoom: Omit<PostRoomData, 'playlist'> = {
    name: '',
    nickname: ''
  }

  const { width } = useWindowSize()
  const { values, errors, onChangeHandler, handleSubmit } = useForm(
    initialRoom,
    onClickHandler,
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
        console.log('error')
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
          {width > sizes.tablet && (
            <PlaylistHeightContainer>
              <Playlist playlist={playlist} setPlaylist={setPlaylist} />
            </PlaylistHeightContainer>
          )}
          <SubmitButton onClick={onClickHandler}>
            <h5>START WATCHING</h5>
            <TextWithIconContainer>
              TOGETHER
              <NextImage src={play} width={34} height={34} />
            </TextWithIconContainer>
          </SubmitButton>
        </CreateRoomFlexContainer>
      </CreateRoomMaxContainer>
    </CreateRoomFormContainer>
  )
}
