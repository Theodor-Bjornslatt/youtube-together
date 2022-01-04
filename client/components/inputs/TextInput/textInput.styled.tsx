import styled, { css } from 'styled-components'

import {
  fontSizes,
  borderRadius,
  colors,
  borders,
  fonts,
  spacings as s
} from '../../../styles/variables'

export const inputBaseStyle = css`
  display: inline-block;
  box-sizing: border-box;
  background: ${colors.lightPink};
  font-size: ${fontSizes.small};
  font-family: ${fonts.roboto};
  border-radius: ${borderRadius.small};
  padding: ${s.extraExtraSmall} 0 ${s.extraExtraSmall} ${s.extraExtraSmall};
  min-height: 34px;
  width: 100%;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 18rem;
  max-height: 100%;
  font-family: ${fonts.roboto};
`

export const WrapperInner = styled.div`
  position: relative;
  margin-top: 4px;
`
export const Label = styled.label`
  color: ${colors.white};
`

export const Input = styled.input`
  ${inputBaseStyle}
  border: ${borders.light};

  &:focus {
    border: ${borders.focus};
    outline: none;
    box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  }
`

export const ErrMsg = styled.span`
  color: ${colors.danger};
  font-size: 0.75rem;
  padding-left: 8px;
  padding-top: 4px;
`
