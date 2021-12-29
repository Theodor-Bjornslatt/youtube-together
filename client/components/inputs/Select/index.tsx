import React from 'react'

import { SelectLabel, SelectStyled } from './Select.styled'
import { WrapperInner, InputWrapper } from '../TextInput/textInput.styled'

type SelectProps = {
  label?: string
  name: string
  onChange?: any
  children: any
}

export const Select = ({ name, label, children, onChange }: SelectProps) => {
  return (
    <InputWrapper>
      {label && <SelectLabel>{label}</SelectLabel>}
      <WrapperInner>
        <SelectStyled name={name} onChange={onChange} defaultValue="">
          <option value="" disabled hidden>
            Pick a color
          </option>
          {children}
        </SelectStyled>
      </WrapperInner>
    </InputWrapper>
  )
}
