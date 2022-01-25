import styled, { css } from 'styled-components'

import {
  fontSizes,
  borderRadius,
  colors,
  borders,
  fonts,
  spacings
} from '../../../styles/variables'

export const inputBaseStyle = css`
  display: inline-block;
  box-sizing: border-box;
  background: ${colors.lightPink};
  font-size: ${fontSizes.small};
  font-family: ${fonts.roboto};
  border-radius: ${borderRadius.small};
  padding: ${spacings.extraExtraSmall} 0 ${spacings.extraExtraSmall}
    ${spacings.extraExtraSmall};
  min-height: 34px;
  width: 100%;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  max-height: 100%;
  font-family: ${fonts.roboto};
  margin-bottom: 10px;
`

export const WrapperInner = styled.div`
  position: relative;
  margin-top: 4px;
`
export const Label = styled.label`
  color: ${colors.white};
`

export type InputStyleProps = {
  removeBottomRadius?: boolean
}

export const Input = styled.input<InputStyleProps>`
  ${inputBaseStyle}
  border: ${borders.light};
  ${(props) =>
    props.removeBottomRadius &&
    `
    border-radius: ${borderRadius.small} ${borderRadius.small} 0 0;
  `}

  &:focus {
    border: ${borders.focus};
    outline: none;
    box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  }
`

export const ErrMsg = styled.span`
  color: ${colors.danger};
  font-size: ${fontSizes.extraExtraSmall};
  padding-left: 8px;
  padding-top: 4px;
  height: 12px;
`
