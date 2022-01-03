import { useState, useEffect } from 'react'

export const usePointerPosition = () => {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setPointerPosition({ x: e.clientX, y: e.clientY })
    })

    return () => {
      window.removeEventListener('mousemove', (e) => {
        setPointerPosition({ x: e.clientX, y: e.clientY })
      })
    }
  }, [])

  return pointerPosition
}