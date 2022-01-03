import React from 'react'

import { MessageData } from '../../../state/SocketContext'
import {
  Card,
  MessageContainer,
  MsgDiv,
  StyledChatMsg,
  TimeDiv,
  UserName
} from './Chatmessage.styled'

type ChatMessageProps = {
  messages?: MessageData[]
}

const ChatMessage = ({ messages }: ChatMessageProps) => {
  return (
    <StyledChatMsg>
      <MessageContainer>
        {messages?.map((msg) => {
          const { username, message, timestamp, id } = msg
          const date = new Date(timestamp)

          return (
            <Card key={id}>
              <UserName>{username}</UserName>
              <MsgDiv color={msg.color}>{message}</MsgDiv>
              <TimeDiv>{`${date.toLocaleTimeString().slice(0, 5)}`}</TimeDiv>
            </Card>
          )
        })}
      </MessageContainer>
    </StyledChatMsg>
  )
}

export default ChatMessage
