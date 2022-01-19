import { useEffect, useState, useRef, RefObject } from 'react'

type ObserverProps = {
  ref: RefObject<HTMLDivElement>
  root: RefObject<HTMLDivElement>
  rootMargin?: string
}

export function useObserver({
  ref,
  root,
  rootMargin = '200px'
}: ObserverProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { root: root.current, rootMargin }
    )
  }, [])

  useEffect(() => {
    ref.current && observerRef.current?.observe(ref.current)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [ref])

  return isVisible
}
