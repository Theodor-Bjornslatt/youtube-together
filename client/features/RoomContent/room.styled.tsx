import styled from 'styled-components'

import {
  colors,
  footerHeights,
  headerBoxHeights,
  sizes,
  spacings,
  zIndexes
} from '../../styles/variables'

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: calc(100vh - ${headerBoxHeights.desktop} - ${footerHeights.desktop});
  gap: ${spacings.extraExtraSmall};
  padding: 0 ${spacings.small};
  max-width: 1530px;
  margin: auto;
  background: ${colors.darkest};

  @media screen and (max-width: ${sizes.desktop}px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: ${sizes.tablet}px) {
    padding: 0 ${spacings.medium};
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    padding: 0 ${spacings.extraSmall};
    height: calc(100vh - ${headerBoxHeights.mobile} - ${footerHeights.mobile});
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
  flex-grow: 1;
  z-index: ${zIndexes.small};
`

export const MainSectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: inherit;
  padding: ${spacings.small} 0;
  max-width: 1000px;

  @media screen and (max-width: 2000px) {
    max-width: 730px;
  }

  @media screen and (max-width: ${sizes.desktop}px) {
    max-width: 550px;
  }
`

export const Aside = styled.div`
  display: flex;
  max-width: 400px;
  margin: 0 0 0 ${spacings.extraSmall};
  height: inherit;
  flex: 1;

  @media screen and (max-width: ${sizes.tablet}px) {
    display: none;
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`
