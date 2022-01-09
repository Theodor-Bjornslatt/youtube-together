import { useRouter } from 'next/router'

import MaxWidthContainer from '../MaxWidthContainer'
import RoomCard from '../RoomCard'
import {
  ContentContainer,
  EmptyCard,
  MainContentContainer
} from './RoomList.styled'

type RoomsProp = {
  rooms: Room[]
}

type Room = {
  name: string
  size: string
  users: string[]
}

export default function RoomList({ rooms }: RoomsProp) {
  const router = useRouter()

  const handleOnClick = (room: string) => {
    const name = room.substring(1)
    router.push(`/room/${name}`)
  }

  const printRooms = (): JSX.Element | JSX.Element[] => {
    return (
      <>
        {rooms.map((room, i) => (
          <RoomCard
            size={'small'}
            key={i}
            title={room.name}
            users={room.size}
            onClick={() => {
              handleOnClick(room.name)
            }}
          />
        ))}
      </>
    )
  }
  return (
    <MainContentContainer>
      <MaxWidthContainer size="large">
        <ContentContainer>
          {rooms.length > 0 ? (
            printRooms()
          ) : (
            <EmptyCard>
              <h5>No available rooms</h5>
            </EmptyCard>
          )}
        </ContentContainer>
      </MaxWidthContainer>
    </MainContentContainer>
  )
}
