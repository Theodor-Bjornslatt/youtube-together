import ReactPlayer from 'react-player/lazy'
import styled, { keyframes } from 'styled-components'

import { colors, maxWidths, spacings } from '../../styles/variables'

export const VideoBoundary = styled.div`
  max-height: 562px;
  margin: auto;
  max-width: ${maxWidths.roomContent}px;
`

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
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
type ControlProps = {
  shouldControlsFadeIn: boolean
}

export const ControlContainer = styled.div<ControlProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
  padding: ${spacings.tiny};
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: ${spacings.tiny};
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${(props) => (props.shouldControlsFadeIn ? fadeIn : fadeOut)} 0.2s
    ease-out;
`

const fadeIn = keyframes`
 from {
    bottom: -77px;
  }
  to {
    bottom: 0px;
  }
`
const fadeOut = keyframes`
 from {
    bottom: 0px;
  }
  to {
    bottom: -77px;
  }
`
