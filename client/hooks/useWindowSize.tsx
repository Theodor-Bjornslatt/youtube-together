import { useState, useEffect } from 'react'

type WindowSize = {
  height: number
  width: number
}

export const useWindowSize = () => {
  let timeout: NodeJS.Timeout
  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: 0,
    width: 0
  })

  function handleResize() {
    setWindowSize({
      height: window?.innerHeight || 0,
      width: window.innerWidth || 0
    })
  }

  function debounceResize() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      handleResize()
    }, 300)
  }

  useEffect(() => {
    window.addEventListener('resize', debounceResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', debounceResize)
    }
  }, [])

  return windowSize
}
