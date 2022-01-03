import { useState } from 'react'

import { TextAreaInput } from '../inputs/TextAreaInput'
import ChatMessage from './ChatMessage'
import { StyledChat } from './Chat.styled'
import { ChatButton } from './ChatMessage/Chatmessage.styled'
import { useSockets } from '../../state/SocketContext'

type ChatProps = {
  room?: string | string[]
}

const Chat = ({ room }: ChatProps) => {
  const { socket, messages } = useSockets()
  const [message, setMessage] = useState('')

  const onClickHandler = () => {
    const obj = {
      room,
      message
    }
    socket.emit('chat', obj)
  }

  return (
    <StyledChat>
      <ChatMessage messages={messages} />
      <TextAreaInput
        name={'chat'}
        placeholder="Enter message..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
      />
      <ChatButton onClick={onClickHandler}>Send</ChatButton>
    </StyledChat>
  )
}

export default Chat
