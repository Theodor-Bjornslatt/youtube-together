import React from 'react'

import { IMessages } from '..'
import {
  Card,
  MessageContainer,
  MsgDiv,
  StyledChatMsg,
  TimeDiv,
  UserName
} from './Chatmessage.styled'

type ChatMessageProps = {
  messages: IMessages[]
  color: string
}

const ChatMessage = ({ messages, color }: ChatMessageProps) => {
  return (
    <StyledChatMsg>
      <MessageContainer>
        {messages.map((message) => {
          const { username, msg, timestamp, id } = message
          const date = new Date(timestamp)

          return (
            <>
              <Card key={id}>
                <UserName>{username}</UserName>
                <MsgDiv color={color}>{msg}</MsgDiv>
                <TimeDiv>{`${date.toLocaleTimeString().slice(0, 5)}`}</TimeDiv>
              </Card>
            </>
          )
        })}
      </MessageContainer>
    </StyledChatMsg>
  )
}

export default ChatMessage
