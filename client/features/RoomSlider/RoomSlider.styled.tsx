import styled from 'styled-components'

import { colors, spacings } from '../../styles/variables'

export const RoomSliderBackground = styled.div`
  background: radial-gradient(${colors.dark}, ${colors.darkest});
`

export const RoomSliderCard = styled.button`
  border: none;
  padding: 0;
  margin: ${spacings.medium} ${spacings.extraExtraSmall};
  background: inherit;
`

export const NoRooms = styled.h4`
  margin: auto;
  padding: ${spacings.small};
`
