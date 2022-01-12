import styled from 'styled-components'

import {
  colors,
  headerBoxHeights,
  sizes,
  spacings
} from '../../styles/variables'

export const Container = styled.div`
  box-sizing: border-box;
  margin-bottom: ${spacings.small};
  display: grid;
  height: calc(100vh - (${headerBoxHeights.desktop}));
  width: 100%;
  gap: ${spacings.extraExtraSmall};
  padding: 0 ${spacings.large};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 0.6fr 1.4fr 1fr;
  grid-template-areas:
    'video video video aside'
    'video video video aside'
    'chat chat chat aside'
    'chat chat chat aside';

  @media screen and (max-width: ${sizes.desktop}px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.6fr 1.4fr 1fr;
    grid-template-areas:
      'video video video'
      'video video video'
      'chat chat chat'
      'chat chat chat';
  }

  @media screen and (max-width: ${sizes.tablet}px) {
    padding: 0 ${spacings.medium};
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    padding: 0 ${spacings.extraSmall};
  }
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

  @media screen and (max-width: ${sizes.desktop}px) {
    display: none;
  }
`
