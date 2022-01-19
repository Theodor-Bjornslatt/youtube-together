import { useState } from 'react'

type apiProps = {
  query?: string
  room?: string | null
}

type PaginationProps = {
  limit?: number
  page?: number
  apiFunction: (args: apiProps) => Promise<unknown[]>
}

export function usePagination({
  limit = 10,
  apiFunction,
  page = 1
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(page)
  const [loading, setLoading] = useState(false)
  const [moreDataAvailable, setMoreDataAvailable] = useState(true)
  const [data, setData] = useState<any>({})

  const apiMethod = async (room?: string | null) => {
    if (!moreDataAvailable) return
    const query = `?limit=${limit}&page=${currentPage}`
    setLoading(true)
    try {
      const data = await apiFunction({ query, room })
      setLoading(false)

      if (data.length < limit || !data) setMoreDataAvailable(false)
      data && setData(data)
      setCurrentPage((prev) => prev + 1)
    } catch (ignore) {
      return
    }
  }

  return { apiMethod, currentPage, loading, moreDataAvailable, data }
}
