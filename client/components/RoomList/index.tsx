import { useRouter } from 'next/router'

import { Room } from '../../types'
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

export default function RoomList({ rooms }: RoomsProp) {
  const router = useRouter()

  const handleOnClick = (room: string) => {
    router.push(`/room/${room}`)
  }

  const printRooms = (): JSX.Element | JSX.Element[] => {
    return (
      <>
        {rooms.map((room, i) => (
          <RoomCard
            size={'large'}
            cover={room.cover}
            key={i}
            name={room.name}
            online={room.online}
            nickname={room.nickname}
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
