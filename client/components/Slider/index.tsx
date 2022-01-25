import { useRef } from 'react'
import Flickity, { FlickityOptions } from 'react-flickity-component'

import { FlickitySlider } from './Slider.styled'

type SliderProps = {
  children: JSX.Element[]
}

export default function Slider({ children }: SliderProps) {
  const ref = useRef<Flickity | null>(null)

  const options: FlickityOptions = {
    dragThreshold: 8,
    draggable: children.length < 4 ? false : true,
    selectedAttraction: 0.5,
    friction: 0.3,
    freeScroll: children.length < 4 ? false : true,
    freeScrollFriction: 0.08,
    groupCells: children.length < 4 ? true : 1,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: children.length < 4 ? false : true,
    imagesLoaded: false,
    cellAlign: 'left',
    initialIndex: children.length / 2 < 1 ? 0 : children.length / 2 - 1
  }

  return (
    <div style={{ position: 'relative' }}>
      <FlickitySlider
        options={options}
        flickityRef={(current) => (ref.current = current)}
        static={true}
        reloadOnUpdate={true}
      >
        {children}
      </FlickitySlider>
    </div>
  )
}
