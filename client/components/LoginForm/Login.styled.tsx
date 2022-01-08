import styled from 'styled-components'

import { ButtonStyled } from '../Button/Button.styled'
import { colors, fonts, fontSizes, spacings } from '../../styles/variables'

export const LoginButton = styled(ButtonStyled)`
  margin-top: ${spacings.extraSmall};
  font-size: ${fontSizes.small};
`

export const ErrorMessage = styled.div`
  font-size: ${fontSizes.extraSmall};
  color: ${colors.danger};
  font-family: ${fonts.roboto};
  margin-top: ${spacings.extraExtraSmall};
`

export const Form = styled.form`
  width: 100%;
`
