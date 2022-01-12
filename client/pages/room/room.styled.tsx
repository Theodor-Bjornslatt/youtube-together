import styled from 'styled-components'

import { ButtonStyled } from '../../components/Button/Button.styled'
import {
  colors,
  fontSizes,
  headerBoxHeights,
  spacings
} from '../../styles/variables'

export const Container = styled.div`
  box-sizing: border-box;
  margin-bottom: ${spacings.small};
  display: grid;
  height: calc(100vh - (${headerBoxHeights.desktop}));
  width: 100%;
  padding: 0 ${spacings.huge};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 0.6fr 1.4fr 1fr;
  grid-template-areas:
    'video video video aside'
    'video video video aside'
    'chat chat chat aside'
    'chat chat chat aside';
`

export const Video = styled.div`
  background-image: url('https://cdn.vox-cdn.com/thumbor/LXvoCd3sbTvxMUpVAd-f4ArjYRA=/0x0:1920x800/1820x1024/filters:focal(694x265:1000x571):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69582511/lotr1_movie_screencaps.com_12025.0.jpg');
  background-size: contain;
  grid-area: video;
`
export const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  grid-area: chat;
  justify-content: center;
`
export const Aside = styled.div`
  width: 100%;
  margin: 0 1rem;
  height: calc(100vh - ${headerBoxHeights.desktop});
  grid-area: aside;
  border-left: 1px solid ${colors.brown};
`
export const ButtonContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.brown};
`

export const Button = styled(ButtonStyled)`
  border-radius: 0;
  border-left: 1px solid ${colors.brown};
  font-size: ${fontSizes.small};
  background: ${colors.dark};
`
export const UsersButton = styled(Button)`
  border-right: 1px solid ${colors.brown};
`
