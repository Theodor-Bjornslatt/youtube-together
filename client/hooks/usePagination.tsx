import { useState } from 'react'

type apiProps = {
  query?: string
  room?: string | null
}

type PaginationProps<T> = {
  limit?: number
  page?: number
  apiFunction: (args: apiProps) => Promise<T[]>
}

type ReadableProperties<T> = {
  [Property in keyof T]: T[Property]
}

export function usePagination<T extends NonNullable<ReadableProperties<T>>>({
  limit = 10,
  apiFunction,
  page = 1
}: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(page)
  const [loading, setLoading] = useState(false)
  const [moreDataAvailable, setMoreDataAvailable] = useState(true)
  const [data, setData] = useState<T[] | []>([])

  const fetchMore = async (room?: string | null) => {
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

  return { fetchMore, currentPage, loading, moreDataAvailable, data }
}
