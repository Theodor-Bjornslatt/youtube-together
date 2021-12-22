import { createGlobalStyle } from 'styled-components'

import { colors, fonts, fontSizes, fontWeights, lineHeights } from './variables'

export const GlobalStyle = createGlobalStyle`
  color: ${colors.white};
  background-color: ${colors.darkest};

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }

  h1 {
    font-family: ${fonts.raleway};
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.hero};
    line-height: ${lineHeights.hero};
  }

  h2 {
    font-family: ${fonts.raleway};
    font-weight: ${fontWeights.semiBold};
    font-size: ${fontSizes.extraLarge};
    line-height: ${lineHeights.extraLarge};
  }

  h3 {

  }

  h4 {

  }

  h5 {

  }
`
