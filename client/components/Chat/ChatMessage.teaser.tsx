import React from 'react'

import { MessageData } from '../../state/SocketContext'
import {
  TeaserCard,
  TeaserMessageContainer,
  FlexContainer
} from './Chat.styled'

type ChatMessageProps = {
  messages: MessageData[]
}

const TeaserChatMessageList = ({ messages }: ChatMessageProps) => {
  return (
    <>
      {messages &&
        messages.map((msg) => {
          const { username, color, message, room, id } = msg
          if (!message) return
          return (
            <div key={id}>
              <TeaserCard>
                <FlexContainer>
                  <p>{`${username} said in ${room}`}</p>
                </FlexContainer>
                <TeaserMessageContainer color={color}>
                  <p>{message}</p>
                </TeaserMessageContainer>
              </TeaserCard>
            </div>
          )
        })}
    </>
  )
}

export default TeaserChatMessageList
