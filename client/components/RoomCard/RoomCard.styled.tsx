import styled from 'styled-components'

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes,
  spacings
} from '../../styles/variables'

export const Card = styled.div`
  background-color: ${colors.darkest};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spacings.extraSmall};
  box-shadow: 6px 8px 50px 0 #ebc9c911;

  -webkit-transition: 0.4s; /* Safari */
  transition: 0.4s all;

  &:active {
    transform: scale(0.88);
  }

  h5,
  h6 {
    font-family: ${fonts.roboto};
    font-weight: ${fontWeights.thin};
    font-size: ${fontSizes.medium};
    line-height: ${lineHeights.medium};

    @media screen and (max-width: ${sizes.tablet}px) {
      font-size: ${fontSizes.small};
      line-height: ${lineHeights.small};
    }

    @media screen and (max-width: ${sizes.mobileSmall}px) {
      font-size: ${fontSizes.extraSmall};
      line-height: ${lineHeights.extraSmall};
    }
  }

  :hover {
    cursor: pointer;
  }
`

export const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${spacings.extraExtraSmall} 0 0;
  width: 100%;
`

export const ImageWrapperLarge = styled.div`
  height: 460px;
  position: relative;
  width: 460px;

  @media screen and (max-width: ${sizes.tablet}px) {
    height: 340px;
    width: 340px;
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    height: 340px;
    width: 340px;
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    height: 280px;
    width: 280px;
  }
`

export const ImageWrapperSmall = styled.div`
  height: 280px;
  width: 280px;
  position: relative;

  @media screen and (max-width: ${sizes.tablet}px) {
    height: 220px;
    width: 220px;
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    height: 180px;
    width: 180px;
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    height: 150px;
    width: 150px;
  }
`
