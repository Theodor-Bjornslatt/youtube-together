import ReactPlayer from 'react-player/lazy'
import styled from 'styled-components'

import { colors } from '../../styles/variables'

export const VideoPlayer = styled(ReactPlayer)`
  pointer-events: none;
`

export const PauseOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;
  bottom: 0;
  color: ${colors.white};
`

export const PlayButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
`
