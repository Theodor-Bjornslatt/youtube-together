import React from 'react'

import { MessageData } from '../../types'
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
      {messages.length > 0 &&
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
