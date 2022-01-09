import { GetServerSideProps } from 'next'

import { serverSideGetRooms } from '../utils/api'
import RoomList from '../components/RoomList'
import Header from '../components/Header'

type RoomsProp = {
  rooms: Room[]
}

type Room = {
  name: string
  size: string
  users: string[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  let rooms
  try {
    ;({ rooms } = await serverSideGetRooms())
  } catch (error) {
    //@TODO maybe prop something else that indicates that our server sent a 500?
    rooms = { rooms: [] }
  }
  return {
    props: {
      rooms
    }
  }
}
const Rooms = ({ rooms }: RoomsProp) => {
  return (
    <>
      <Header title={'Rooms'} />
      <RoomList rooms={rooms}></RoomList>
    </>
  )
}

export default Rooms
