import { useEffect, useState } from 'react'

import { TextAreaInput } from '../inputs/TextAreaInput'
import ChatMessage from './ChatMessage'
import { StyledChat } from './Chat.styled'
import { ChatButton } from './ChatMessage/Chatmessage.styled'

export type IMessages = {
  msg: string
  timestamp: number
  username: string
  id: string
}

const Chat = () => {
  const [chatMsg, setChatMsg] = useState('')
  const [messages, setMessages] = useState<IMessages[]>([])
  const [color, setColor] = useState('')
  // useEffect(() => {
  //   socket.on('chat', (data) => {
  //     console.log(data)
  //     if (data) {
  //       setColor(data.color)
  //     }
  //     setMessages((old) => [...old, data])
  //   })
  //   socket.on('state', (data) => {
  //     console.log(data)
  //   })
  // }, [])

  // const onClickHandler = () => {
  //   const obj = {
  //     room: 'watch',
  //     msg: chatMsg
  //   }
  //   socket.emit('chat', obj)
  // }
  return (
    <StyledChat>
      <ChatMessage color={color} messages={messages} />
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
