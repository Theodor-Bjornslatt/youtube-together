import NextImage from '../NextImage'
import {
  Card,
  ContentContainer,
  ImageWrapperLarge,
  ImageWrapperSmall,
  SizeProp
} from './RoomCard.styled'
import { Room } from '../../types'

type CardProp = {
  onClick?: () => void
} & Room &
  SizeProp

export default function RoomCard({
  name,
  online,
  nickname,
  size = 'large',
  cover,
  onClick
}: CardProp) {
  return (
    <Card onClick={onClick} size={size}>
      {size === 'small' ? (
        <ImageWrapperSmall>
          <NextImage src={cover}></NextImage>
        </ImageWrapperSmall>
      ) : (
        <ImageWrapperLarge>
          <NextImage src={cover}></NextImage>
        </ImageWrapperLarge>
      )}

      <ContentContainer size={size}>
        <h5>{name}</h5>
        <h5>
          {nickname}: {online}
        </h5>
      </ContentContainer>
    </Card>
  )
}
