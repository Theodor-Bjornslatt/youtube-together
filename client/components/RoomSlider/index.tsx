import RoomCard from '../RoomCard'
import Slider from '../Slider'

export default function RoomSlider() {
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
  return (
    <Slider>
      {arr.map((thing, index) => (
        <div key={index}>
          <RoomCard {...roomInfo} size={'small'} />
        </div>
      ))}
    </Slider>
  )
}
