import styled, { keyframes } from 'styled-components'

import {
  borders,
  colors,
  fonts,
  lineHeights,
  fontSizes,
  fontWeights,
  spacings,
  shadows,
  scrollbarWidths
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
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex: 1;
  border-top: ${borders.light};
  gap: ${spacings.extraSmall};

  ::-webkit-scrollbar {
    width: ${scrollbarWidths.small};
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
  border: 1px solid ${colors.transparentDark};
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
    min-height: 0px;
    height: 0px;
    opacity: 0;
  },
  50% {
    min-height: 40px;
    height: 40px;
  },
  100% {
    min-height: 80px;
    height: 80px;
    opacity: 1;
  }
`

const fadeOutAddItem = keyframes`
  0% {
    max-height: 80px;
    height: 80px;
    opacity: 1;
  },
  50% {
    max-height: 40px;
    height: 40px;
  },
  100% {
    max-height: 0px;
    height: 0px;
    opacity: 0;
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
  margin: -20px 0 0;
  z-index: 10000;
  width: 100%;
  cursor: pointer;
  min-height: ${(props) => (props.shouldAddItemFadeIn ? '80px' : 0)};
  animation: ${(props) =>
      props.shouldAddItemFadeIn ? fadeInAddItem : fadeOutAddItem}
    0.5s ease;

  :hover {
    background: ${colors.transparentDark};
    border-left: ${borders.light};
  }
`

const FadeInText = keyframes`
  0% {
    display: none:
  },
  50% {
    color: ${colors.darkest};
    display: block;
  }
  100% {
    color: ${colors.white};
  }
`

const FadeOutText = keyframes`
  0% {
    display: block;
    color: ${colors.white};
  },
  50% {
    display: none;
    color: ${colors.darkest};
  }
  100% {
    display: none;
  }
`
type TextAnimationProps = {
  shouldTextFadeIn?: boolean
}

export const AddItemText = styled.h4<TextAnimationProps>`
  animation: ${(props) => (props.shouldTextFadeIn ? FadeInText : FadeOutText)}
    0.3s ease-out;
  padding: 0 ${spacings.extraSmall};
`
