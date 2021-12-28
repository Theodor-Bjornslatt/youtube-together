import styled from 'styled-components'

import {
  fontSizes,
  fontWeights,
  colors,
  borderRadius,
  spacings
} from '../../styles/variables'

export const ButtonStyled = styled.button`
  background: ${colors.brown};
  border: none;
  border-radius: ${borderRadius.small};
  justify-content: 'center';
  align-items: 'center';
  padding: ${spacings.extraExtraSmall};
  width: '100%';
  color: ${colors.white};
  font-size: ${fontSizes.medium};
  text-transform: uppercase;
  font-weight: ${fontWeights.bold};
  &:hover {
    cursor: pointer;
  }
`
