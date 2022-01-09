import React, {
  forwardRef,
  JSXElementConstructor,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef
} from 'react'

type childrenProps = {
  children: ReactElement<
    { ref: MutableRefObject<HTMLElement> },
    string | JSXElementConstructor<unknown>
  >
}

const FocusTrap = forwardRef(({ children }: childrenProps, ref) => {
  const _ref = useRef<HTMLElement>(null)
  const realRef = ref ?? _ref

  useEffect(() => {
    if (!_ref.current) return
    const content = _ref.current

    const focusableElements = 'button, [href], input, textarea'

    const focusableContent =
      content.querySelectorAll<HTMLElement>(focusableElements)
    if (!focusableContent.length) return

    const firstFocusableElement = focusableContent[0]
    const lastFocusableElement = focusableContent[focusableContent.length - 1]

    function trapFocus(e: KeyboardEvent): void {
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

  return React.cloneElement(children, {
    ref: realRef as MutableRefObject<HTMLElement>
  })
})
FocusTrap.displayName = 'FocusTrap'
export default FocusTrap
