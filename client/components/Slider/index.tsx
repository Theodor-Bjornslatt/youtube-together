import { useEffect, useRef } from 'react'
import Flickity, { FlickityOptions } from 'react-flickity-component'
import { useRouter } from 'next/router'

import NextImage from '../NextImage'
import rightArrow from '../../public/right-arrow.svg'
import leftArrow from '../../public/left-arrow.svg'
import {
  FlickityNextButton,
  FlickityPrevButton,
  FlickitySlider
} from './Slider.styled'

type SliderProps = {
  children: JSX.Element[]
}

export default function Slider({ children }: SliderProps) {
  const ref = useRef<Flickity | null>(null)
  const router = useRouter()

  const options: FlickityOptions = {
    dragThreshold: 8,
    draggable: children.length < 3 ? false : true,
    selectedAttraction: 0.01,
    friction: 0.3,
    freeScroll: children.length < 3 ? false : true,
    freeScrollFriction: 0.08,
    groupCells: children.length < 3 ? true : 1,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: children.length < 3 ? false : true,
    imagesLoaded: false,
    cellAlign: 'center',
    initialIndex: children.length / 2 < 1 ? 0 : children.length / 2 - 1,
    cellSelector: '.cell'
  }

  useEffect(() => {
    if (!ref.current) return
    ref.current.on(
      'staticClick',
      (_: unknown, __: unknown, cellElement: HTMLButtonElement) => {
        router.push(`/room/${cellElement.value}`)
      }
    )
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <FlickitySlider
        options={options}
        flickityRef={(current) => (ref.current = current)}
        static={true}
        reloadOnUpdate={true}
      >
        {children}
        <FlickityPrevButton onClick={() => ref.current?.previous()}>
          <NextImage src={leftArrow} height={30} width={30} />
        </FlickityPrevButton>
        <FlickityNextButton onClick={() => ref.current?.next()}>
          <NextImage src={rightArrow} height={30} width={30} />
        </FlickityNextButton>
      </FlickitySlider>
    </div>
  )
}
