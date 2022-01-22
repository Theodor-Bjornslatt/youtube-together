import ReactPlayer from 'react-player/lazy'
import styled, { keyframes } from 'styled-components'

import { colors, maxWidths, spacings, fonts } from '../../styles/variables'

export const ContentContainer = styled.div``

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

type OverlayProps = {
  isFadingIn: boolean
}

export const PauseOverlay = styled.div<OverlayProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${colors.darkest};
  top: 0%;
  font-family: ${fonts.roboto};
  color: ${colors.white};
  animation: ${(props) => (props.isFadingIn ? FadeOutOverlay : FadeInOverlay)}
    0.5s ease-in-out;
`

const FadeOutOverlay = keyframes`
  0% {
    top: 50%;
  }
  100% {
    top: 0%;
  }
`

const FadeInOverlay = keyframes`
  0% {
    top: 0%;
  }
  100% {
    top: 50%;
  }
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
  margin-right: ${spacings.tiny};
  -webkit-transition: 0.4s; /* Safari */
  transition: 0.4s all;
  &:hover {
    cursor: pointer;
  }
  :active {
    transform: scale(0.94);
  }
`

export const ControlContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: ${spacings.tiny};
  width: 100%;
  margin: auto;
  margin-bottom: ${spacings.extraExtraSmall};
`
