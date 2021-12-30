import styled from 'styled-components'

import { borders, colors } from '../../../styles/variables'

export const StyledChatMsg = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background: ${colors.dark};
  width: 75%;
  height: 20rem;
  overflow: scroll;
`

export const MessageContainer = styled.div`
  width: 50%;
  margin: auto;
  border-radius: ${borders.light};
`
export const Card = styled.div`
  background: yellow;
  margin: 1rem;
`
