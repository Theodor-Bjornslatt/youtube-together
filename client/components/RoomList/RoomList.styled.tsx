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
  gap: ${spacings.extraExtraSmall};
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  margin-top: ${spacings.extraExtraSmall};
  width: 100%;

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    grid-template-columns: auto;
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    grid-template-columns: repeat(1, auto);
  }
`

export const EmptyCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`
