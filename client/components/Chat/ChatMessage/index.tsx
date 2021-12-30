import React from 'react'

import { IMessages } from '..'
import { Card, MessageContainer, StyledChatMsg } from './Chatmessage.styled'

type ChatMessageProps = {
  messages: IMessages[]
}

const ChatMessage = ({ messages }: ChatMessageProps) => {
  return (
    <StyledChatMsg>
      <MessageContainer>
        {messages.map((message, index) => {
          const { user, msg, timestamp } = message
          const date = new Date(timestamp)
          return (
            <Card key={index}>
              <li>{user}</li>
              <li>{msg}</li>
              <li>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</li>
            </Card>
          )
        })}
      </MessageContainer>
    </StyledChatMsg>
  )
}

export default ChatMessage
