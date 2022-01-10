import styled from 'styled-components'

import {
  borders,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes,
  spacings,
  headerBoxHeights
} from '../../styles/variables'
import { MaxWidthContainerStyled } from '../MaxWidthContainer/MaxWidthContainer.styled'

export const FooterPlaceHolder = styled.div`
  height: ${headerBoxHeights.desktop};
`

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${headerBoxHeights.desktop};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.darkest};
  border: ${borders.light};
`

export const FooterContentContainer = styled(MaxWidthContainerStyled)`
  justify-content: space-between;
  margin: ${spacings.small} 0;
  max-width: 100%;
`

export const FooterLinkSection = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: ${spacings.extraLarge};
  height: 100%;
  color: ${colors.white};
  font-family: ${fonts.raleway};
  font-weight: ${fontWeights.semiBold};
  font-size: ${fontSizes.medium};
  line-height: ${lineHeights.medium};

  @media screen and (max-width: ${sizes.mobile}px) {
    gap: ${spacings.extraSmall};
    font-size: ${fontSizes.small};
    line-height: ${lineHeights.small};
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    font-size: ${fontSizes.extraSmall};
    line-height: ${lineHeights.extraSmall};
  }
`
