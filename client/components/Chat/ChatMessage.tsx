import React from 'react'

import { MessageData } from '../../state/SocketContext'
import { Card, MsgDiv, TimeDiv, UserName } from './Chat.styled'

type ChatMessageProps = {
  message: MessageData
}

const ChatMessage = ({ message: msg }: ChatMessageProps) => {
  const { username, color, timestamp, message } = msg
  return (
    <Card>
      <UserName>{username}</UserName>
      <MsgDiv color={color}>{message}</MsgDiv>
      <TimeDiv>{new Date(timestamp).toLocaleTimeString().slice(0, 5)}</TimeDiv>
    </Card>
  )
}

export default ChatMessage
