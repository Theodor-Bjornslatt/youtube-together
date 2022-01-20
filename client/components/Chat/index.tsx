import React, { useEffect, useRef, useState } from 'react'

import ChatMessage from './ChatMessage'
import {
  ChatContainer,
  MessageListContainer,
  InputWrapper,
  AreaInput,
  SubmitButton,
  FlexContainer
} from './Chat.styled'
import { useSockets } from '../../state/SocketContext'
import { usePagination } from '../../hooks/usePagination'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { apiGetRoomMessages } from '../../utils/api'
import send from '../../public/send.png'
import NextImage from '../NextImage'

type ChatProps = {
  room: string | null
}

const Chat = ({ room }: ChatProps) => {
  const { socket, messages, setMessages } = useSockets()
  const { moreDataAvailable, apiMethod, data } = usePagination({
    apiFunction: apiGetRoomMessages,
    page: 2
  })

  const [message, setMessage] = useState('')
  const [inputFocus, setInputFocus] = useState(false)

  const root = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)

  const threshold = [0.25, 0.5, 0.75]

  const onScreen = useIntersectionObserver({
    ref: topRef.current,
    root: root.current,
    threshold,
    rootMargin: '50px'
  })

  useEffect(() => {
    if (!onScreen) return
    moreDataAvailable && apiMethod(room)
  }, [onScreen])

  useEffect(() => {
    data.length && setMessages((currentList) => [...data, ...currentList])
  }, [data])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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

  return (
    <ChatContainer size="extraExtraSmall">
      <MessageListContainer ref={root}>
        <div ref={topRef} />
        {messages?.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
        <div ref={bottomRef} />
      </MessageListContainer>

      <InputWrapper focus={inputFocus}>
        <FlexContainer>
          <AreaInput
            maxRows={2}
            name={'chat'}
            placeholder="Enter message..."
            onKeyDown={sendMessage}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
          <SubmitButton onClick={onClickHandler}>
            <NextImage width={25} height={25} src={send} />
          </SubmitButton>
        </FlexContainer>
      </InputWrapper>
    </ChatContainer>
  )
}

export default Chat
