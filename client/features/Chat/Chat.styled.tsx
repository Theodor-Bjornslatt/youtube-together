import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

import {
  borderRadius,
  borders,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  maxWidths,
  scrollbarWidths,
  shadows,
  sizes,
  spacings
} from '../../styles/variables'

type StyledInputProps = {
  focus?: boolean
  color?: string | undefined
}

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${maxWidths.roomContent}px;

  margin: 0 2px 2px 2px;
`

export const RefContainer = styled.div`
  height: 1px;
`

export const MessageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  padding: ${spacings.small} ${spacings.small} 0 ${spacings.small};
  margin-bottom: 3px;

  ::-webkit-scrollbar {
    width: ${scrollbarWidths.medium};
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    padding: ${spacings.small} ${spacings.extraSmall} 0
      ${spacings.extraExtraSmall};
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    padding: ${spacings.extraExtraSmall} ${spacings.extraExtraSmall} 0 0;
  }
`

export const Card = styled.div`
  background: ${colors.darkest};
  padding: 0 ${spacings.extraSmall};
  position: relative;
  border-radius: ${borderRadius.small};
  margin: ${spacings.extraExtraSmall} 0;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Name = styled.p`
  color: ${colors.lightBrown};
  font-style: italic;
  font-size: 16px;
`
export const Time = styled.p`
  color: ${colors.lightBrown};
  font-size: 12px;
  margin-left: ${spacings.extraExtraSmall};
`

export const MessageContainer = styled.div`
  margin-top: ${spacings.tiny};

  p {
    color: ${(props) => props.color};
    word-wrap: break-word;
  }
`

export const ChatButton = styled.button`
  font-family: ${fonts.roboto};
  background: ${colors.brown};
  border: none;
  border-radius: ${borderRadius.small};
  justify-content: center;
  align-items: center;
  padding: ${spacings.extraExtraSmall};
  width: 100%;
  color: ${colors.white};
  font-size: ${fontSizes.small};
  text-transform: uppercase;
  font-weight: ${fontWeights.bold};
  margin-top: ${spacings.extraExtraSmall};
  letter-spacing: 3px;

  &:hover {
    cursor: pointer;
  }
`

export const InputWrapper = styled.div<StyledInputProps>`
  border-radius: ${borderRadius.large};
  display: inline-block;
  overflow: hidden;
  -webkit-overflow: hidden;
  width: 100%;

  outline: ${(props) => {
    return props.focus ? `${borders.outline}` : `none`
  }};

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (display: flow-root) {
      outline: none;
    }
  }
`

export const FlexContainer = styled.div`
  display: flex;
`
export const FlexContainerColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`

export const NewMessages = styled.div`
  color: ${colors.darkPink};
  font-size: ${fontSizes.extraExtraSmall};
  font-family: ${fonts.roboto};
  margin-bottom: ${spacings.tiny};
  background: ${colors.dark};
  border: ${borders.light};
  padding: 0 ${spacings.extraExtraSmall};
  padding-bottom: 1px;
  border-radius: ${borderRadius.large};
  cursor: pointer;
`

export const AreaInput = styled(TextareaAutosize)`
  display: inline-block;
  box-sizing: border-box;
  background: ${colors.lightPink};
  font-size: ${fontSizes.extraSmall};
  font-family: ${fonts.roboto};
  padding: ${spacings.extraExtraSmall} 0 ${spacings.extraExtraSmall}
    ${spacings.extraSmall};
  border: none;
  color: ${colors.darkest};
  resize: none;
  flex: 10;
  margin: 0;
  border-radius: 0;

  &:focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;

  @media screen and (max-width: ${sizes.mobile}px) {
    font-size: ${fontSizes.extraSmall};
    padding-left: ${spacings.extraExtraSmall};
  }
`

export const SubmitButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  text-transform: none;
  background: ${colors.lightPink};
  box-sizing: border-box;
  border: none;
  color: ${colors.darkest};
  display: inline-block;
  flex: 1;
  padding: 0;
  width: 100%;
  margin: 0;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: none;

    :last-child {
      overflow: hidden;
      transform: scale(1.6);
    }
  }
`
export const TeaserCard = styled.div<StyledInputProps>`
  background: ${colors.dark};
  padding: ${spacings.extraSmall};
  border-radius: ${borderRadius.small};
  margin: ${spacings.extraExtraSmall} 0;
  width: 100%;
  box-shadow: ${shadows.slider};

  p {
    font-family: ${fonts.roboto};
    color: #5c5757;
    font-size: ${fontSizes.small};
  }

  @media screen and (max-width: ${sizes.tablet}px) {
    p {
      font-size: ${fontSizes.extraSmall};
    }
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    font-size: ${fontSizes.extraExtraSmall};
  }
`

export const TeaserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TeaserMessageContainer = styled.div<StyledInputProps>`
  padding: ${spacings.small};

  p {
    font-family: ${fonts.roboto};
    font-style: normal;
    color: ${(props) => (props ? props.color : colors.darkPink)};
    word-wrap: break-word;
  }

  @media screen and (max-width: ${sizes.tablet}px) {
    padding: ${spacings.extraSmall};
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    padding: ${spacings.extraSmall};
  }
`
