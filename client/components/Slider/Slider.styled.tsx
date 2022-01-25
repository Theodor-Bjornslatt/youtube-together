import styled from 'styled-components'
import Flickity from 'react-flickity-component'

import {
  borders,
  colors,
  shadows,
  spacings,
  zIndexes
} from '../../styles/variables'

export const FlickitySlider = styled(Flickity)`
  position: relative;
  border-top: ${borders.light};
  border-bottom: ${borders.light};
  padding: ${spacings.large};

  .flickity-enabled:focus {
    outline: none;
  }

  .flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .flickity-slider {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
`

const BasicFlickityButton = styled.button`
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: ${zIndexes.large};
  height: 50px;
  width: 50px;
  border-radius: 100px;
  border: none;
  background: ${colors.darkest};
  box-shadow: ${shadows.small};
  cursor: pointer;
`

export const FlickityPrevButton = styled(BasicFlickityButton)`
  left: 2px;
`

export const FlickityNextButton = styled(BasicFlickityButton)`
  right: 2px;
`
