import styled, { keyframes } from 'styled-components'

import { borders, colors, fontWeights, spacings } from '../../styles/variables'

type PlaylistContainerProps = {
  isActive?: boolean
}

export const PlaylistContainer = styled.div<PlaylistContainerProps>`
  cursor: ${(props) => (props.isActive ? 'grabbing' : 'grab')};
  height: 1000px;
  width: 100%;
  padding: 0 ${spacings.extraExtraSmall};
`

type DraggingProps = {
  isActive?: boolean
  isDragging?: boolean
}

export const PlaylistItemContainer = styled.div<DraggingProps>`
  display: grid;
  width: 100%;
  max-width: 500px;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: ${colors.darkest};
  border: ${borders.light};
  margin: ${spacings.extraSmall} 0;
  ${(props) =>
    props.isDragging &&
    `
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    pointer-events: none;
    `}
  cursor: ${(props) => (props.isActive ? 'grabbing' : 'grab')};
  ${(props) => !props.isDragging && `transition: 0.3s ease-in;`}

  :hover {
    border-left: 2px solid ${colors.lightPink};
  }
`

export const PlaylistTextContainer = styled.div`
  max-width: 100%;
  padding: ${spacings.extraSmall};

  h4 {
    overflow: hidden;
    font-weight: ${fontWeights.bold};
    word-wrap: wrap;
  }
`

export const PlaylistIconContainer = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  margin-right: ${spacings.extraSmall};
`

const fadeInAddItem = keyframes`
  0% {
    height: 0px;
  },
  50% {
    height: 50px;
  }
  100% {
    height: 100px;
  }
`

const fadeOutAddItem = keyframes`
  0% {
    height: 100px;
  },
  50% {
    height: 50px;
  },
  100% {
    height: 0px;
  }
`

type AddItemAnimationProp = {
  shouldAddItemFadeIn?: boolean
}

export const AddItemContainer = styled(
  PlaylistItemContainer
)<AddItemAnimationProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: -12px 0 0;
  z-index: 100;
  width: 100%;
  cursor: pointer;
  height: ${(props) => (props.shouldAddItemFadeIn ? '100px' : 0)};
  animation: ${(props) =>
      props.shouldAddItemFadeIn ? fadeInAddItem : fadeOutAddItem}
    0.5s ease-out;

  :hover {
    background: ${colors.transparentPink};
    border-left: ${borders.light};
  }
`

const FadeInText = keyframes`
  0% {
    color: ${colors.darkest};
  },
  100% {
    color: ${colors.white};
  }
`

const FadeOutText = keyframes`
  0% {
    color: ${colors.white};
  },
  100% {
    color: ${colors.darkest};
  }
`
type TextAnimationProps = {
  shouldTextFadeIn?: boolean
}

export const AddItemText = styled.h5<TextAnimationProps>`
  animation: ${(props) => (props.shouldTextFadeIn ? FadeInText : FadeOutText)}
    0.5s ease-out;
  padding: 0 ${spacings.extraSmall};
`
