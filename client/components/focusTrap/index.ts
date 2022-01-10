import { RefObject, useEffect } from 'react'

export const useFocustrap = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref.current) return
    const content = ref.current

    const focusableElements = 'button, [href], input, textarea'

    const focusableContent =
      content.querySelectorAll<HTMLElement>(focusableElements)
    if (!focusableContent.length) return

    const firstFocusableElement = focusableContent[0]
    const lastFocusableElement = focusableContent[focusableContent.length - 1]

    const trapFocus = (e: KeyboardEvent) => {
      const isTabPressed = e.key === 'Tab'

      if (!isTabPressed) return

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus()
          e.preventDefault()
        }
      }
    }

    document.addEventListener('keydown', trapFocus)
    firstFocusableElement.focus()

    return () => {
      document.removeEventListener('keydown', trapFocus)
    }
  }, [ref.current])
}
