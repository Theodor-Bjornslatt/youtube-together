import styled from 'styled-components'

import { borders, colors, fonts, spacings } from '../../../styles/variables'

export const CheckboxContainer = styled.div`
  margin: 1rem;
  display: flex;
  align-items: end;
`

export const Label = styled.label`
  color: ${colors.white};
  font-family: ${fonts.roboto};
  margin-right: ${spacings.extraExtraSmall};
`

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  background-color: ${colors.lightPink};
  border: ${borders.light};
  padding: 7px;
  border-radius: 3px;
  display: inline-block;
  position: relative;

  &:checked {
    &::after {
      content: '✔';
      font-size: 14px;
      position: absolute;
      top: -1px;
      left: 1px;
      color: ${colors.darkest};
    }
  }
`
