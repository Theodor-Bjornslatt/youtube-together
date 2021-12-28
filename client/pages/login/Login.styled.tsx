import styled from 'styled-components'

import { ButtonStyled } from '../../components/Button/Button.styled'
import { fontSizes } from '../../styles/variables'

export const FormContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginButton = styled(ButtonStyled)`
  font-size: ${fontSizes.small};
`
