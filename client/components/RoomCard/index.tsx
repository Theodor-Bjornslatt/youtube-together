import NextImage from '../NextImage'
import {
  Card,
  ContentContainer,
  ImageWrapperLarge,
  ImageWrapperSmall
} from './RoomCard.styled'
import scary from '../../public/scary.jpg'

type CardProp = {
  title: string
  users: string
  size?: 'small' | 'large'
  onClick?: () => void
}
export default function RoomCard({
  title,
  users,
  size = 'large',
  onClick
}: CardProp) {
  return (
    <Card onClick={onClick}>
      {size === 'small' ? (
        <ImageWrapperSmall>
          <NextImage src={scary}></NextImage>
        </ImageWrapperSmall>
      ) : (
        <ImageWrapperLarge>
          <NextImage src={scary}></NextImage>
        </ImageWrapperLarge>
      )}

      <ContentContainer>
        <h5>{title.substring(1)}</h5>
        <h5>{users} online</h5>
      </ContentContainer>
    </Card>
  )
}
