import { useState } from 'react'

import { TextAreaInput } from '../inputs/TextAreaInput'
import ChatMessage from './ChatMessage'
import { StyledChat } from './Chat.styled'
import { ChatButton } from './ChatMessage/Chatmessage.styled'
import { useSockets } from '../../state/SocketContext'

const Chat = () => {
  const { socket, messages } = useSockets()
  const [chatMsg, setChatMsg] = useState('')

  const onClickHandler = () => {
    console.log('socket', socket)
    if (!socket) return
    const obj = {
      room: 'watch',
      msg: chatMsg
    }
    socket.emit('chat', obj)
  }

  return (
    <StyledChat>
      <ChatMessage messages={messages} />
      <TextAreaInput
        name={'chat'}
        placeholder="Enter message..."
        value={chatMsg}
        onChange={(e) => {
          setChatMsg(e.target.value)
        }}
      />
      <ChatButton onClick={onClickHandler}>Send</ChatButton>
    </StyledChat>
  )
}

export default Chat
