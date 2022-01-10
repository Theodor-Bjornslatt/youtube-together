import styled from 'styled-components'

import { headerBoxHeights, spacings } from '../../styles/variables'

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  height: calc(100vh - ${headerBoxHeights.desktop});
  width: 100%;
  padding: 0 ${spacings.extraSmall};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'video video video video aside'
    'video video video video aside'
    'chat chat chat chat aside'
    'chat chat chat chat aside';
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
`
export const Aside = styled.div`
  width: 100%;
  margin: 0 1rem;
  height: calc(100vh - ${headerBoxHeights.desktop});
  grid-area: aside;
`
