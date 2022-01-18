import { useEffect, useState, useRef } from 'react'

export function useObserver(ref: any, root: any) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isOnScreen, setIsOnScreen] = useState(false)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      { root: root.current, rootMargin: '200px' }
    )
  }, [])

  useEffect(() => {
    observerRef.current?.observe(ref.current)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [ref])

  return isOnScreen
}
