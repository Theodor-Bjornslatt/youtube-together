import styled from 'styled-components'

import { colors, fontSizes } from '../../styles/variables'
import { ButtonStyled } from '../Button/Button.styled'

export const Container = styled.div`
  height: 100%;
  background-color: ${colors.dark};
  width: 32rem;
`
export const ButtonContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.brown};
`

export const Button = styled(ButtonStyled)`
  border-radius: 0;
  border-left: 1px solid ${colors.brown};
  font-size: ${fontSizes.small};
  background: ${colors.dark};
`
export const UsersButton = styled(Button)`
  border-right: 1px solid ${colors.brown};
`
