import styled from 'styled-components'

import { ButtonStyled } from '../Button/Button.styled'
import { fonts, fontSizes, spacings } from '../../styles/variables'

export const Form = styled.form`
  width: 100%;
`

export const SignupButton = styled(ButtonStyled)`
  margin-top: ${spacings.small};
  font-size: ${fontSizes.small};
  font-family: ${fonts.roboto};

  margin-top: ${spacings.extraSmall};
`
