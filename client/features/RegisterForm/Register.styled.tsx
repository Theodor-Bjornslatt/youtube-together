import styled from 'styled-components'

import { ButtonStyled } from '../../components/Button/Button.styled'
import { borders, fonts, fontSizes, spacings } from '../../styles/variables'

export const Form = styled.form`
  width: 100%;
`

export const SignupButton = styled(ButtonStyled)`
  margin-top: ${spacings.small};
  font-size: ${fontSizes.small};
  font-family: ${fonts.roboto};
  margin-bottom: ${spacings.medium};

  &:focus {
    border: ${borders.focus};
    outline: none;
  }
`
export const Headline = styled.h2`
  font-family: ${fonts.roboto};
  margin: ${spacings.medium} 0;

  margin-top: ${spacings.extraSmall};
`
