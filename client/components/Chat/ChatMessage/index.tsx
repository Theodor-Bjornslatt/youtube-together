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
        {messages?.map((message) => {
          const { username, msg, timestamp, id } = message
          const date = new Date(timestamp)

          return (
            <>
              <Card key={id}>
                <UserName>{username}</UserName>
                <MsgDiv color={message.color}>{msg}</MsgDiv>
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
