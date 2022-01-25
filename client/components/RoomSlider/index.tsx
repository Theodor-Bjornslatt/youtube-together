// import { useRouter } from 'next/router'

import { Rooms } from '../../types'
import RoomCard from '../RoomCard'
import Slider from '../Slider'
import { RoomSliderBackground, RoomSliderCard } from './RoomSlider.styled'

export default function RoomSlider({ rooms }: Rooms) {
  return (
    <RoomSliderBackground>
      <Slider>
        {rooms.map((room, id) => (
          <RoomSliderCard value={room.name} key={id} className={'cell'}>
            <RoomCard {...room} size={'small'} />
          </RoomSliderCard>
        ))}
      </Slider>
    </RoomSliderBackground>
  )
}
