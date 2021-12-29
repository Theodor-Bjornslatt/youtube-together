import styled from 'styled-components'

import { ButtonStyled } from '../../components/Button/Button.styled'
import { fonts, fontSizes, spacings } from '../../styles/variables'

export const Form = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SignupButton = styled(ButtonStyled)`
  margin-top: ${spacings.extraSmall};
  font-size: ${fontSizes.small};
  font-family: ${fonts.roboto};
  margin-bottom: 2rem;
`
export const Headline = styled.h2`
  font-family: ${fonts.roboto};
  margin-bottom: 2rem;
`
