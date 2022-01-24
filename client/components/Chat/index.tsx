import React, { useContext, useEffect, useRef, useState } from 'react'

import ChatMessage from './ChatMessage'
import {
  ChatContainer,
  MessageListContainer,
  InputWrapper,
  AreaInput,
  SubmitButton,
  FlexContainer,
  RefContainer,
  NewMessages
} from './Chat.styled'
import { useSockets } from '../../state/SocketContext'
import { usePagination } from '../../hooks/usePagination'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { apiGetRoomMessages } from '../../utils/api'
import send from '../../public/send.png'
import NextImage from '../NextImage'
import { GlobalContext, User } from '../../state/GlobalState'

type ChatProps = {
  room: string | null
  user: User | null
}

const Chat = ({ room, user }: ChatProps) => {
  const { socket, messages, setMessages } = useSockets()
  const { state } = useContext(GlobalContext)
  const { moreDataAvailable, apiMethod, data, loading } = usePagination({
    apiFunction: apiGetRoomMessages,
    page: 2
  })

  const [message, setMessage] = useState('')
  const [inputFocus, setInputFocus] = useState(false)
  const [autoScroll, setAutoScroll] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [count, setCount] = useState(0)

  const chatListRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const threshold = [0, 0.25, 0.5, 0.75]

  const topRefOnScreen = useIntersectionObserver({
    ref: topRef.current,
    root: chatListRef.current,
    threshold,
    rootMargin: '50px'
  })

  const bottomRefOnScreen = useIntersectionObserver({
    ref: bottomRef.current,
    root: chatListRef.current,
    threshold,
    rootMargin: '50px'
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    data.length && setMessages((currentList) => [...data, ...currentList])
  }, [data])

  useEffect(() => {
    if (topRefOnScreen && !loading && moreDataAvailable) {
      chatListRef.current?.scrollBy(0, 60)
    }
  }, [topRefOnScreen, loading, moreDataAvailable])

  useEffect(() => {
    if (!topRefOnScreen) return
    if (moreDataAvailable) {
      apiMethod(room)
    }
  }, [topRefOnScreen])

  useEffect(() => {
    inputFocus && bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    setAutoScroll(true)
  }, [inputFocus])

  useEffect(() => {
    if (!isMounted) return
    if (!bottomRefOnScreen) {
      setAutoScroll(false)
    } else {
      setAutoScroll(true)
      setCount(0)
    }
  }, [bottomRefOnScreen])
  useEffect(() => {
    const sender = messages?.[messages.length - 1]
    autoScroll && bottomRef.current?.scrollIntoView({ behavior: 'smooth' })

    if (bottomRefOnScreen === true) return
    if (
      sender?.username !== user?.username ||
      sender?.username !== state.defaultUsername
    ) {
      setCount((prev) => prev + 1)
    }
  }, [messages])

  const onClickHandler = () => {
    const obj = {
      room,
      message: message.trim()
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
  function handleUnreadMessages() {
    setInputFocus(true)
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ChatContainer>
      <MessageListContainer
        ref={chatListRef}
        onScroll={(e) => {
          e.preventDefault()
          inputRef.current?.blur()
        }}
      >
        <div ref={topRef}>{loading && <h3>LOADING</h3>}</div>
        {messages &&
          messages.map((message, i) => {
            return (
              <ChatMessage message={message} key={(message.id || 'ran') + i} />
            )
          })}
        <RefContainer ref={bottomRef} />
      </MessageListContainer>
      {count && (
        <NewMessages onClick={handleUnreadMessages}>
          {count}
          {count > 1 ? ' new messages' : ' new message'}
        </NewMessages>
      )}
      <InputWrapper focus={inputFocus}>
        <FlexContainer>
          <AreaInput
            ref={inputRef}
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
          <SubmitButton
            onClick={onClickHandler}
            disabled={message.length === 0}
          >
            <NextImage width={25} height={25} src={send} />
          </SubmitButton>
        </FlexContainer>
      </InputWrapper>
    </ChatContainer>
  )
}

export default Chat
