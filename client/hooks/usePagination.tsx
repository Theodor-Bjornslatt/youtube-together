import { Dispatch, SetStateAction, useState } from 'react'

import { MessageData } from '../state/SocketContext'

type PaginationProps = {
  limit?: number
  updateList?: Dispatch<SetStateAction<MessageData[]>>
}

export function usePagination({ limit = 10, updateList }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [more, setMore] = useState(true)
  const [data, setData] = useState([])

  const apiFetch = async (url: string) => {
    if (currentPage === 1) {
      setCurrentPage((prev) => prev + 1)
      return
    }
    if (!more) return
    const query = `?limit=${limit}&page=${currentPage}`
    setLoading(true)
    try {
      const res = await fetch(url + query, {
        credentials: 'include'
      })
      const { messages } = await res.json()
      setLoading(false)

      if (messages.length < limit || !messages) setMore(false)
      if (messages) {
        updateList && updateList((currentList) => [...messages, ...currentList])
        setData(messages)
      }
      setCurrentPage((prev) => prev + 1)
    } catch (e) {
      console.log(e)
    }
  }

  return { apiFetch, currentPage, loading, more, data }
}
