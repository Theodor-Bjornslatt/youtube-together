import {
  AnimationEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'

import { PlayItem } from '.'
import { useForm } from '../../hooks/useForm'
import { validateUrl } from '../../utils/formValidationRules'
import { TextInput } from '../inputs/TextInput'
import { AddItemContainer, AddItemText } from './Playlist.styled'

type PlaylistInputProps = {
  setPlaylist: Dispatch<SetStateAction<PlayItem[]>>
}

export default function PlaylistInput({ setPlaylist }: PlaylistInputProps) {
  const { values, onChangeHandler } = useForm(() => null, { url: '' })

  const [isUrlValid, setIsUrlValid] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isItemVisible, setIsVisible] = useState(false)
  const [isTextVisible, setIsTextVisible] = useState(false)
  const [shouldItemFadeIn, setShouldItemFadeIn] = useState(true)
  const [shouldTextFadeIn, setShouldTextFadeIn] = useState(true)
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(
    null
  )

  const ref = useRef<HTMLDivElement>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChangeHandler(e)
    hasError && setHasError(false)
    currentTimeout && clearTimeout(currentTimeout)

    const timeout = setTimeout(() => {
      console.log(values.url)
      const isValid = validateUrl(values.url)
      console.log(isValid)
      setIsUrlValid(isValid)
      setHasError(!isValid)
      setCurrentTimeout(null)
    }, 300)
    setCurrentTimeout(timeout)
  }

  function handleAnimationEnd(e: AnimationEvent<HTMLDivElement>) {
    if (ref.current === e.target) {
      console.log('here')
      shouldItemFadeIn
        ? (setShouldTextFadeIn(true), setIsTextVisible(true))
        : setIsVisible(false)
    }
  }

  function handleTextAnimationEnd() {
    console.log('end')
    !shouldTextFadeIn && (setIsTextVisible(false), setShouldItemFadeIn(false))
  }

  useEffect(() => {
    isUrlValid
      ? !isItemVisible && setIsVisible(true)
      : setShouldTextFadeIn(false)
  }, [isUrlValid])

  useEffect(() => {
    isItemVisible && !shouldItemFadeIn && setShouldItemFadeIn(true)
  }, [isItemVisible])

  useEffect(() => {
    isTextVisible && !shouldTextFadeIn && setShouldTextFadeIn(true)
  }, [isTextVisible])

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <TextInput
        label="Paste your youtube video url here"
        name="url"
        value={values.url}
        error={
          hasError
            ? 'You can only paste links to youtube videos here'
            : undefined
        }
        onChange={handleChange}
        removeBottomRadius={isItemVisible}
        noAutoComplete
      />
      {isItemVisible && (
        <AddItemContainer
          ref={ref}
          onClick={() => {
            setPlaylist((prev) => [
              ...prev,
              { id: '123123d', name: values.url }
            ])
            setShouldTextFadeIn(false)
          }}
          shouldAddItemFadeIn={shouldItemFadeIn}
          onAnimationEnd={handleAnimationEnd}
        >
          <div>
            {isTextVisible && (
              <AddItemText
                onAnimationEnd={handleTextAnimationEnd}
                shouldTextFadeIn={shouldTextFadeIn}
              >
                Add item to playlist
              </AddItemText>
            )}
          </div>
        </AddItemContainer>
      )}
    </div>
  )
}
