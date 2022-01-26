import styled from 'styled-components'

import {
  imageFilters,
  maxWidths,
  sizes,
  spacings
} from '../../styles/variables'

export const StartHeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  padding: 0 ${spacings.large};

  @media screen and (max-width: ${sizes.mobile}px) {
    height: 50vh;
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    height: 30vh;
    padding: 0 ${spacings.small};
  }
`

export const TopTextContainer = styled.div`
  position: absolute;
  top: ${spacings.huge};
  left: 0;

  @media screen and (max-width: ${sizes.mobile}px) {
    top: ${spacings.small};
  }
`

export const BottomTextContainer = styled.div`
  position: absolute;
  bottom: ${spacings.huge};
  right: 0;

  @media screen and (max-width: ${sizes.mobile}px) {
    bottom: ${spacings.small};
  }
`

export const ImageFilter = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: ${imageFilters.dark};
`

export const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: ${maxWidths.large}px;
`
