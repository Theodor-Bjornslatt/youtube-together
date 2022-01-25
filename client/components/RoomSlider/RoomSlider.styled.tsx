import styled from 'styled-components'

import { colors } from '../../styles/variables'

export const RoomSliderBackground = styled.div`
  background: radial-gradient(${colors.dark}, ${colors.darkest});
`

export const RoomSliderCard = styled.button`
  border: none;
  padding: 0;
  margin: 0 10px;
  background: inherit;
`
