import { useRef } from 'react'
import Flickity, { FlickityOptions } from 'react-flickity-component'

import RoomCard from '../RoomCard'
import { FlickitySlider } from './Slider.styled'

export default function Slider() {
  // temporary until actually fetching data
  const arr = []
  for (let i = 0; i < 10; i++) {
    arr.push(i)
  }

  const roomInfo = {
    name: 'Room',
    online: '2',
    nickname: 'losers',
    cover: 'https://img.youtube.com/vi/gfkTfcpWqAY/0.jpg'
  }

  const ref = useRef<Flickity | null>(null)

  const options: FlickityOptions = {
    dragThreshold: 8,
    draggable: true,
    selectedAttraction: 0.5,
    friction: 0.3,
    freeScroll: true,
    freeScrollFriction: 0.08,
    groupCells: 1,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    imagesLoaded: false,
    initialIndex: 2 //Temporary to fix something with wraparound, groupcells and initial transform property on
  }

  return (
    <FlickitySlider
      options={options}
      flickityRef={(current) => (ref.current = current)}
      static={true}
      reloadOnUpdate={true}
    >
      {console.log(arr)}
      {arr.map((thing, index) => (
        <div key={index}>
          <RoomCard {...roomInfo} size={'small'} />
        </div>
      ))}
    </FlickitySlider>
  )
}
