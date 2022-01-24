import React from 'react'

import {
  WrapperInner,
  InputWrapper,
  Input,
  ErrMsg,
  Label
} from './textInput.styled'

type InputProps = {
  label?: string
  placeholder?: string
  error?: string
  name: string
  value: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  required?: boolean
  type?: string
  removeBottomRadius?: boolean
  noAutoComplete?: boolean
  disable?: boolean
}

export const TextInput = ({
  name,
  type = 'text',
  error,
  label,
  placeholder,
  onChange,
  value,
  removeBottomRadius,
  noAutoComplete,
  disable = false
}: InputProps) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <WrapperInner>
        <Input
          name={name}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          removeBottomRadius={removeBottomRadius}
          autoComplete={noAutoComplete ? 'off' : 'on'}
          disabled={disable}
        />
      </WrapperInner>
      <ErrMsg>{error}</ErrMsg>
    </InputWrapper>
  )
}
