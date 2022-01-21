import ReactPlayer from 'react-player/lazy'
import styled from 'styled-components'

import { colors, maxWidths } from '../../styles/variables'

export const VideoBoundary = styled.div`
  max-height: 562px;
  margin: auto;
  max-width: ${maxWidths.roomContent}px;
`

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 50.25%;
  height: 0;
`

export const VideoPlayer = styled(ReactPlayer)`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 1000px;
`

export const PauseOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;
  bottom: 0;
  color: ${colors.white};
`

export const ControlPanelContainer = styled.div`
  max-width: ${maxWidths.roomContent}px;
  margin: 0 auto;
`

export const ButtonPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ControlButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`
