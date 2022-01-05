import styled from 'styled-components'

import {
  colors,
  fontSizes,
  fonts,
  borderRadius,
  borders
} from '../../../styles/variables'
import { inputBaseStyle, WrapperInner } from '../TextInput/textInput.styled'

type Headline = {
  headline?: string
}

export const Select = styled.div<Headline>`
  ${inputBaseStyle}
  position: relative;
  &:focus {
    border-radius: ${borderRadius.small};
    border: ${borders.focus};
    outline: none;
    box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  }
`

export const OptionsWrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  background: ${colors.lightPink};
  font-size: ${fontSizes.small};
  font-family: ${fonts.roboto};
  border-radius: ${borderRadius.small};
  min-height: 34px;
  width: 100%;
  z-index: 1;
  position: absolute;
  left: 0;
`
export const Options = styled.div`
  ${inputBaseStyle}
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: grey;
    border-radius: 0;
  }
  &:focus {
    background: grey;
    border-radius: 0;
    outline: none;
    /* border-radius: ${borderRadius.small};
    border: ${borders.focus};
    outline: none;
    box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.3); */
  }
`

export const Arrow = styled.span`
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 12px;
  width: 15px;
  height: 15px;
  background-image: url('https://img.icons8.com/material-sharp/24/000000/give-way--v1.png');
  background-repeat: no-repeat;
  background-size: contain;
`
