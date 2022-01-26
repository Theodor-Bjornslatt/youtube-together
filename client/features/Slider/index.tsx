import { useEffect, useRef } from 'react'
import Flickity, { FlickityOptions } from 'react-flickity-component'
import { useRouter } from 'next/router'

// import NextImage from '../NextImage'
// import rightArrow from '../../public/right-arrow.svg'
// import leftArrow from '../../public/left-arrow.svg'
import {
  // FlickityNextButton,
  // FlickityPrevButton,
  FlickitySlider
} from './Slider.styled'

type SliderProps = {
  children: JSX.Element[]
}

export default function Slider({ children }: SliderProps) {
  const ref = useRef<Flickity | null>(null)
  const router = useRouter()
  // const [hasNext, setHasNext] = useState(true)
  // const [hasPrevious, setHasPrevious] = useState(false)
  // const [fadeInPrevious, setFadeInPrevious] = useState(true)
  // const [fadeInNext, setFadeInNext] = useState(true)

  const options: FlickityOptions = {
    dragThreshold: 8,
    draggable: children.length < 3 ? false : true,
    selectedAttraction: 0.01,
    friction: 0.5,
    freeScroll: children.length === 1 ? false : true,
    freeScrollFriction: 0.08,
    groupCells: 1,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: false,
    cellAlign: 'center',
    initialIndex: 0,
    cellSelector: '.cell'
  }

  useEffect(() => {
    if (!ref.current) return
    ref.current.on(
      'staticClick',
      (_: unknown, __: unknown, cellElement: HTMLButtonElement | undefined) => {
        cellElement?.value && router.push(`/room/${cellElement.value}`)
      }
    )
  }, [])

  // function previousSlide() {
  //   console.log('prev', ref.current?.selectedIndex)
  //   if (ref.current?.selectedIndex === children.length - 1) {
  //     setFadeInNext(true)
  //     setHasNext(true)
  //   } else if (ref.current?.selectedIndex === 1) {
  //     setFadeInPrevious(false)
  //   }
  //   ref.current?.previous()
  // }

  // function nextSlide() {
  //   console.log('next', ref.current?.selectedIndex)
  //   if (ref.current?.selectedIndex === 0) {
  //     setFadeInPrevious(true)
  //     setHasPrevious(true)
  //   } else if (ref.current?.selectedIndex === children.length - 2) {
  //     setFadeInNext(false)
  //   }
  //   ref.current?.next()
  // }

  // function endPreviousButtonAnimation() {
  //   !fadeInPrevious && setHasPrevious(false)
  // }

  // function endNextButtonAnimation() {
  //   !fadeInNext && setHasNext(false)
  // }

  return (
    <FlickitySlider
      options={options}
      flickityRef={(current) => (ref.current = current)}
      static={true}
    >
      {children}
      {/* {hasPrevious && (
        <FlickityPrevButton
          shouldFadeIn={fadeInPrevious}
          onClick={previousSlide}
          onAnimationEnd={endPreviousButtonAnimation}
        >
          <NextImage src={leftArrow} height={30} width={30} />
        </FlickityPrevButton>
      )}
      {hasNext && (
        <FlickityNextButton
          shouldFadeIn={fadeInNext}
          onClick={nextSlide}
          onAnimationEnd={endNextButtonAnimation}
        >
          <NextImage src={rightArrow} height={30} width={30} />
        </FlickityNextButton>
      )} */}
    </FlickitySlider>
  )
}
