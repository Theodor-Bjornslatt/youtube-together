import React from 'react'

import { MessageData } from '../../state/SocketContext'
import {
  Card,
  InfoContainer,
  MessageContainer,
  Name,
  Time
} from './Chat.styled'

type ChatMessageProps = {
  message: MessageData
}

const ChatMessage = ({ message: msg }: ChatMessageProps) => {
  const { username, color, timestamp, message } = msg

  function getTimeString() {
    const date = new Date(timestamp)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    return `${hour < 10 ? '0' + hour : hour}:${
      minutes < 10 ? '0' + minutes : minutes
    }`
  }

  return (
    <Card>
      <InfoContainer>
        <Name>{username}</Name>
        <Time>{getTimeString()}</Time>
      </InfoContainer>
      <MessageContainer color={color}>
        <p>{message}</p>
      </MessageContainer>
    </Card>
  )
}

export default ChatMessage
