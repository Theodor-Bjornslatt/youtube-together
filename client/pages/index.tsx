import { GetServerSideProps } from 'next'

import { FlexContainerColumn } from '../components/Chat/Chat.styled'
import TeaserChatMessageList from '../components/Chat/ChatMessage.teaser'
import Header from '../components/Header'
import MaxWidthContainer from '../components/MaxWidthContainer'
import RoomSlider from '../components/RoomSlider'
import StartHero from '../components/StartHero'
import { MessageData, Room } from '../types'
import { apiGetRandomMessages, apiGetRooms } from '../utils/api'

type Props = {
  messages: MessageData[]
  rooms: Room[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  let messages: MessageData[]
  let rooms: Room[]

  try {
    messages = await apiGetRandomMessages({ random: 5 })
    rooms = await apiGetRooms()
  } catch (error) {
    messages = []
    rooms = []
  }

  return {
    props: {
      messages,
      rooms
    }
  }
}

const Home = ({ messages, rooms }: Props) => {
  return (
    <>
      <StartHero />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MaxWidthContainer size={'medium'}>
          <FlexContainerColumn>
            <Header title={'Random messages'} />
            <RoomSlider rooms={rooms} />
            <Header title={'Random messages'} />
            <TeaserChatMessageList messages={messages} />
          </FlexContainerColumn>
        </MaxWidthContainer>
      </div>
    </>
  )
}

export default Home
