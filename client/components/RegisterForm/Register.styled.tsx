import styled from 'styled-components'

import { ButtonStyled } from '../Button/Button.styled'
import { fonts, fontSizes, sizes, spacings } from '../../styles/variables'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SignupButton = styled(ButtonStyled)`
  margin-top: ${spacings.small};
  font-size: ${fontSizes.small};
  font-family: ${fonts.roboto};
  margin-bottom: 2rem;
`
export const Headline = styled.h2`
  font-family: ${fonts.roboto};
  margin: 2rem 0;

  @media screen and (max-width: ${sizes.mobile}px) {
    margin: 0 0 2rem 0;
  }
`
