import React from 'react'

import { SelectStyled } from './Select.styled'
import {
  WrapperInner,
  InputWrapper,
  Label,
  ErrMsg
} from '../TextInput/textInput.styled'

type SelectProps = {
  label?: string
  name: string
  onChange?: any
  children: any
  error: string
}

export const Select = ({
  name,
  label,
  children,
  onChange,
  error
}: SelectProps) => {
  return (
    <InputWrapper>
      {label && <Label hasErrorMsg={error !== undefined}>{label}</Label>}
      <WrapperInner>
        <SelectStyled
          name={name}
          onChange={onChange}
          defaultValue=""
          hasErrorMsg={error !== undefined}
        >
          {children}
        </SelectStyled>
      </WrapperInner>
      {error && <ErrMsg>{error}</ErrMsg>}
    </InputWrapper>
  )
}
