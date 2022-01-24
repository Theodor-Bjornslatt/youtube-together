import styled, { keyframes } from 'styled-components'

import {
  borders,
  colors,
  fonts,
  lineHeights,
  fontSizes,
  fontWeights,
  spacings,
  shadows
} from '../../styles/variables'

type PlaylistContainerProps = {
  isActive?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`

export const PlaylistContainer = styled.div<PlaylistContainerProps>`
  position: relative;
  cursor: ${(props) => (props.isActive ? 'grabbing' : 'default')};
  width: 100%;
  padding: ${spacings.extraExtraSmall} ${spacings.extraExtraSmall};
  background: ${colors.transparentDarkest};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex: 1;
  border-top: ${borders.light};
  gap: ${spacings.extraSmall};

  ::-webkit-scrollbar-track {
    border-right: 1px solid ${colors.dark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.transparentDark};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.brown};
  }
`

export const PlaylistInputContainer = styled.div`
  position: relative;
  height: 100px;
  flex: 0 0 auto;
  margin: ${spacings.extraSmall} ${spacings.extraExtraSmall} 0;
`

type DraggingProps = {
  isActive?: boolean
  isDragging?: boolean
}

export const PlaylistItemContainer = styled.div<DraggingProps>`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  box-shadow: ${shadows.extraSmall};
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  background: ${colors.darkest};
  border: ${borders.light};
  padding: ${spacings.extraSmall};
  ${(props) =>
    props.isDragging &&
    `
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    pointer-events: none;
    width: calc(100% - ${spacings.extraExtraSmall} - ${spacings.extraExtraSmall});
    `}
  cursor: ${(props) => (props.isActive ? 'grabbing' : 'grab')};
  ${(props) => !props.isDragging && `transition: 0.3s ease-in;`}

  :hover {
    border-left: 1px solid ${colors.lightPink};
  }
`

export const PlaylistText = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  white-space: nowrap;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.extraExtraSmall};
  pointer-events: none;

  span {
    font-family: ${fonts.roboto};
    font-weight: ${fontWeights.regular};
    font-size: ${fontSizes.small};
    color: ${colors.white};
    line-height: ${lineHeights.medium};
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
  position: absolute;
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
    background: ${colors.transparentDark};
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

export const AddItemText = styled.h4<TextAnimationProps>`
  animation: ${(props) => (props.shouldTextFadeIn ? FadeInText : FadeOutText)}
    0.5s ease-out;
  padding: 0 ${spacings.extraSmall};
`
