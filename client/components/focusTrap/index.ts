import React, { JSXElementConstructor, useEffect, useRef } from 'react'

type childrenProps = {
  children: React.ReactElement<unknown, string | JSXElementConstructor<unknown>>
}

const FocusTrap: React.FC<childrenProps> = ({ children }) => {
  const ref = useRef<HTMLElement>()

  useEffect(() => {
    if (!ref.current) return
    const content = ref.current

    const focusableElements = 'button, [href], input, textarea'

    const focusableContent =
      content.querySelectorAll<HTMLElement>(focusableElements)
    if (!focusableContent.length) return

    const firstFocusableElement = focusableContent[0]
    const lastFocusableElement = focusableContent[focusableContent.length - 1]

    const trapFocus = function (e: KeyboardEvent): void {
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
  }, [])

  return React.cloneElement(children, { ref: ref })
}
FocusTrap.displayName = 'FocusTrapWrapper'
export default FocusTrap
