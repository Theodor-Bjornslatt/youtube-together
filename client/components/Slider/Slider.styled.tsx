import styled, { keyframes } from 'styled-components'
import Flickity from 'react-flickity-component'

import {
  borders,
  colors,
  shadows,
  sizes,
  zIndexes
} from '../../styles/variables'

const PulsatingBorder = keyframes`
    50% {
      box-shadow: 2px 0px 20px 6px ${colors.transparentPink};
    }
`

export const FlickitySlider = styled(Flickity)`
  position: relative;
  border-top: ${borders.light};
  border-bottom: ${borders.light};
  outline: none;

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

  .is-selected {
    box-shadow: ${shadows.large};
    animation: ${PulsatingBorder} 4s infinite;
  }
`

const FadeInButton = keyframes`
  0% {
    opacity: 0;
  },
  100% {
    opacity: 1;
  }
`

const FadeOutButton = keyframes`
  0% {
    opacity: 1;
  },
  100% {
    opacity: 0;
  }
`

type FadeInProps = {
  shouldFadeIn?: boolean
}

const BasicFlickityButton = styled.button<FadeInProps>`
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
  animation: ${(props) => (props.shouldFadeIn ? FadeInButton : FadeOutButton)}
    0.5s ease-out;

  @media screen and (max-width: ${sizes.tablet}px) {
    display: none;
  }
`

export const FlickityPrevButton = styled(BasicFlickityButton)`
  left: 2px;
`

export const FlickityNextButton = styled(BasicFlickityButton)`
  right: 2px;
`
