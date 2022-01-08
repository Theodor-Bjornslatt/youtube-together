import styled from 'styled-components'

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  headerBoxHeights,
  lineHeights,
  sizes,
  spacings
} from '../../styles/variables'

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${colors.darkest};
  color: ${colors.white};
  display: flex;
  height: ${headerBoxHeights.desktop};
  justify-content: space-between;
  padding: ${spacings.extraSmall} ${spacings.extraLarge};
  text-transform: uppercase;
  width: 100%;

  h5,
  a {
    font-family: ${fonts.roboto};
    font-weight: ${fontWeights.thin};
    font-size: ${fontSizes.medium};
    line-height: ${lineHeights.medium};
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    height: ${headerBoxHeights.mobile};
    padding: ${spacings.extraSmall} ${spacings.small};

    a {
      font-size: ${fontSizes.small};
      line-height: ${lineHeights.small};
    }
  }
`

export const MainContentContainer = styled.div`
  display: flex;
  font-size: ${fontSizes.small};
  height: 100%;
  justify-content: space-between;
`
