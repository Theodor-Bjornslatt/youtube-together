import { useForm } from '../../hooks/useForm'
import {
  validateCreateRoom,
  validateUrl
} from '../../utils/formValidationRules'
import {
  SubmitButton,
  GridContainer,
  CreateRoomFormContainer
} from './CreateRoomForm.styled'
import NextImage from '../NextImage'
// import Playlist from '../Playlist'
import play from '../../public/play.svg'
import { useSockets } from '../../state/SocketContext'
import { User } from '../../state/GlobalState'
import { ButtonStyled } from '../Button/Button.styled'
import { TextInput } from '../inputs/TextInput'
import { Form } from './CreateRoomForm.styled'

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

  // @TODO handle creation of room
  // @TODO evolve playlist component
  //const [playlist, setPlaylist] = useState<PlaceHolderType[]>([])
  // const [id, setId] = useState(1)

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

  const addToPlaylist = () => {
    if (!validateUrl(values.url)) return
    // const obj = { name: values.url, id }
    // setPlaylist((old) => [...old, obj])
    // setId((old) => old++)
  }

  return (
    <CreateRoomFormContainer>
      <GridContainer size={'large'}>
        <div>
          <Form onSubmit={handleSubmit}>
            <TextInput
              label="Name your room"
              name="name"
              value={values.name}
              error={errors.name}
              onChange={onChangeHandler}
            />
            <TextInput
              label="Paste your youtube video url here"
              name="url"
              value={values.url}
              error={errors.url}
              onChange={onChangeHandler}
            />
            <ButtonStyled onClick={addToPlaylist}>Add URL</ButtonStyled>
          </Form>
        </div>
        <div>
          <h5>Order your playlist</h5>
          {/* <Playlist playlist={playlist} setPlaylist={setPlaylist}></Playlist> */}
        </div>
      </GridContainer>
      <SubmitButton onClick={handleSubmit}>
        <h5>START WATCHING TOGETHER</h5>
        <NextImage src={play} width={34} height={34} />
      </SubmitButton>
    </CreateRoomFormContainer>
  )
}
