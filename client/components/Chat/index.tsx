import { useState } from 'react'

import { TextAreaInput } from '../inputs/TextAreaInput'
import ChatMessage from './ChatMessage'
import { ChatContainer, MessageListContainer, ChatButton } from './Chat.styled'
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
    socket?.emit('chat', obj)
  }
  const sendMsg = (e: any) => {
    if (e.key === 'Enter') {
      onClickHandler()
    }
  }

  return (
    <ChatContainer>
      <MessageListContainer>
        {messages?.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
      </MessageListContainer>
      <TextAreaInput
        name={'chat'}
        placeholder="Enter message..."
        onKeyDown={sendMsg}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
      />
      <ChatButton onClick={onClickHandler}>Send</ChatButton>
    </ChatContainer>
  )
}

export default Chat
