import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

import {
  borderRadius,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  sizes,
  spacings
} from '../../styles/variables'
import { MaxWidthContainerStyled } from '../MaxWidthContainer/MaxWidthContainer.styled'

type StyledInputProps = {
  focus: boolean
}

export const ChatContainer = styled(MaxWidthContainerStyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const MessageListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 500px;
  width: 100%;
  overflow-y: auto;
  padding: ${spacings.small} ${spacings.small} 0 ${spacings.small};

  &:not(:last-child) {
    margin-bottom: -${spacings.extraSmall};
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
  color: ${colors.white};
  font-style: italic;
  font-size: 16px;
`
export const Time = styled.p`
  color: ${colors.white};
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
  //change this if trubble
  margin: 50px 0px;
  overflow: hidden;
  width: 100%;

  outline: ${(props) => {
    return props.focus ? `2px solid #D9A6AE` : `none`
  }};
  box-shadow: ${(props) => {
    return props.focus ? `inset 0 0 50px #000000` : 'inset 0 0 50px #000000'
  }};
`

export const FlexContainer = styled.div`
  display: flex;
`

export const AreaInput = styled(TextareaAutosize)`
  display: inline-block;
  box-sizing: border-box;
  background: ${colors.lightPink};
  font-size: ${fontSizes.small};
  font-family: ${fonts.roboto};
  padding: ${spacings.extraSmall} 0 ${spacings.extraSmall}
    ${spacings.extraSmall};
  border: none;
  color: ${colors.darkest};
  resize: none;
  flex: 5;

  &:focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;

  @media screen and (max-width: ${sizes.mobile}px) {
    font-size: ${fontSizes.extraSmall};
    padding: ${spacings.extraExtraSmall} 0 ${spacings.extraExtraSmall}
      ${spacings.extraExtraSmall};
  }
`

export const SubmitButton = styled.button`
  background: ${colors.lightPink};
  box-sizing: border-box;
  border: none;
  color: ${colors.darkest};
  display: inline-block;
  flex: 1;
  padding: 0;
  width: 100%;

  &:active {
    transform: none;
    :last-child {
      transform: scale(5);
    }
  }
`
