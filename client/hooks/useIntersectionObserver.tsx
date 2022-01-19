import { useEffect, useState } from 'react'

type ObserverProps = {
  ref: HTMLDivElement | null
  root?: HTMLDivElement | null
  rootMargin?: string
  threshold: number[]
}

export function useIntersectionObserver({
  ref,
  root = null,
  rootMargin = '0px',
  threshold
}: ObserverProps) {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { root, rootMargin, threshold }
    )

    ref && intersectionObserver.observe(ref)

    return () => {
      intersectionObserver.disconnect()
    }
  }, [ref, root, rootMargin, threshold])

  return isVisible
}
