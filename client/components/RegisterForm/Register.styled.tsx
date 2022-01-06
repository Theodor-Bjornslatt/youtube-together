import styled from 'styled-components'

import { ButtonStyled } from '../Button/Button.styled'
import { borders, fonts, fontSizes, spacings } from '../../styles/variables'

export const Form = styled.form`
  width: 100%;
`

export const SignupButton = styled(ButtonStyled)`
  margin-top: ${spacings.small};
  font-size: ${fontSizes.small};
  font-family: ${fonts.roboto};
  margin-bottom: 2rem;

  &:focus {
    border: ${borders.focus};
    outline: none;
  }
`
export const Headline = styled.h2`
  font-family: ${fonts.roboto};
  margin: 2rem 0;

  margin-top: ${spacings.extraSmall};
`
