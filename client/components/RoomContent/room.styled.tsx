import styled from 'styled-components'

import {
  colors,
  headerBoxHeights,
  sizes,
  spacings
} from '../../styles/variables'

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  height: calc(
    100vh - ${headerBoxHeights.desktop} - ${headerBoxHeights.desktop}
  );

  gap: ${spacings.extraExtraSmall};
  padding: 0 ${spacings.large};
  grid-template-columns: 3fr 1fr;
  grid-auto-flow: column;

  @media screen and (max-width: ${sizes.desktop}px) {
    grid-template-columns: 1fr;
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
`
export const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  flex-shrink: 1;
  z-index: 1;
`

export const MainSectionContainer = styled.div`
  justify-self: center;
  width: 100%;
  display: grid;
  flex-direction: column;
  height: calc(
    100vh - ${headerBoxHeights.desktop} - ${headerBoxHeights.desktop}
  );
`

export const Aside = styled.div`
  width: 100%;
  margin: 0 1rem;
  height: 100%;
  border-left: 1px solid ${colors.brown};

  @media screen and (max-width: ${sizes.desktop}px) {
    display: none;
  }
`
