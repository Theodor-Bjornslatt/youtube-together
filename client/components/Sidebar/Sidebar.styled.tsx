import styled from 'styled-components'

import { colors, fontSizes } from '../../styles/variables'
import { ButtonStyled } from '../Button/Button.styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const ButtonContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.brown};
`

type ActiveProps = {
  isActive: boolean
}

export const Button = styled(ButtonStyled)<ActiveProps>`
  border-radius: 0;
  border-left: 1px solid ${colors.brown};
  font-size: ${fontSizes.small};
  background: ${(props) => (props.isActive ? colors.dark : 'transparent')};
  transition: 0.5s ease;

  :hover {
    background: ${colors.brown};
  }
`

export const UsersButton = styled(Button)`
  border-left: none;
`

export const SidebarContentContainer = styled.div`
  display: flex;
  overflow-y: auto;
`
