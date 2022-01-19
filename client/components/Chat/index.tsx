import React, { useEffect, useRef, useState } from 'react'

import { TextAreaInput } from '../inputs/TextAreaInput'
import ChatMessage from './ChatMessage'
import { ChatContainer, MessageListContainer, ChatButton } from './Chat.styled'
import { useSockets } from '../../state/SocketContext'
import { usePagination } from '../../hooks/usePagination'
import Checkbox from '../inputs/Checkbox'
import { useObserver } from '../../hooks/useObserver'
import { apiGetRoomMessages } from '../../utils/api'

type ChatProps = {
  room: string | null
}

const Chat = ({ room }: ChatProps) => {
  const { socket, messages, setMessages } = useSockets()
  const { more, apiMethod } = usePagination({
    updateList: setMessages,
    apiFunction: apiGetRoomMessages
  })
  const [message, setMessage] = useState('')
  const [autoScroll, setAutoScroll] = useState(true)

  const root = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)

  const onScreen = useObserver(topRef, root)

  const handleCheckboxClick = () => {
    setAutoScroll((prev) => !prev)
  }

  const onClickHandler = () => {
    const obj = {
      room,
      message
    }
    socket?.emit('chat', obj)
    setMessage('')
  }

  const sendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
      onClickHandler()
    }
  }

  useEffect(() => {
    if (!onScreen) return
    more && apiMethod(room)
  }, [onScreen])

  useEffect(() => {
    if (autoScroll) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <ChatContainer size="extraExtraSmall">
      <MessageListContainer ref={root}>
        <div style={{ height: '0' }} ref={topRef} />

        {messages?.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
        <div style={{ height: '0' }} ref={bottomRef} />
      </MessageListContainer>
      <Checkbox
        label="Auto scroll"
        checked={autoScroll}
        onClick={handleCheckboxClick}
      />
      <TextAreaInput
        name={'chat'}
        placeholder="Enter message..."
        onKeyDown={sendMessage}
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
