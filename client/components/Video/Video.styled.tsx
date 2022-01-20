import ReactPlayer from 'react-player/lazy'
import styled from 'styled-components'

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
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${colors.darkest};
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
  margin-right: ${spacings.tiny};

  &:hover {
    cursor: pointer;
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
