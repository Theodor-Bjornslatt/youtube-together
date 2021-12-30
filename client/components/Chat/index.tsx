import { useEffect, useState } from 'react'

import socket from '../../utils/socket'
import { TextAreaInput } from '../inputs/TextAreaInput'
import Button from '../Button'
import ChatMessage from './ChatMessage'

export type IMessages = {
  msg: string
  timestamp: number
  user: string
}

const Chat = () => {
  const [chatMsg, setChatMsg] = useState('')
  const [messages, setMessages] = useState<IMessages[]>([])

  useEffect(() => {
    let a: any
    // eslint-disable-next-line prefer-const
    a = 'watch'

    socket.emit('join', a)
    socket.on('chat', (data) => {
      console.log(data)
      setMessages((old) => [...old, data])
    })
  }, [])

  const onClickHandler = () => {
    const obj = {
      room: 'watch',
      msg: chatMsg
    }
    socket.emit('chat', obj)
  }
  return (
    <>
      <ChatMessage messages={messages} />
      <TextAreaInput
        name={'chat'}
        value={chatMsg}
        onChange={(e) => {
          setChatMsg(e.target.value)
        }}
      />
      <Button onClick={onClickHandler}>Hello</Button>
    </>
  )
}

export default Chat
