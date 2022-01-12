import styled from 'styled-components'

import { colors, sizes, spacings } from '../../styles/variables'

export const MainContentContainer = styled.div`
  background-color: ${colors.darkest};
  display: flex;
  justify-content: center;
`

export const ContentContainer = styled.div`
  align-items: center;
  display: grid;
  gap: ${spacings.extraSmall};
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  margin: ${spacings.extraExtraSmall} 0;
  width: 100%;

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    grid-template-columns: auto;
    gap: ${spacings.extraExtraSmall};
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    grid-template-columns: repeat(1, auto);
    gap: ${spacings.extraExtraSmall};
  }

  @media screen and (max-width: ${sizes.tablet}px) {
    gap: ${spacings.extraExtraSmall};
  }

  @media screen and (min-width: ${sizes.desktopWide}px) {
    grid-template-columns: repeat(3, auto);
    gap: ${spacings.large};
  }
`

export const EmptyCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`
