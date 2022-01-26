import React from 'react'

import { InputWrapper } from '../TextInput/TextInput.styled'
import { AreaInput } from './TextAreaInput.styled'

type AreaProps = {
  placeholder?: string
  name: string
  value: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  required?: boolean
  type?: string
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement> | undefined
}

export const TextAreaInput = ({
  name,
  placeholder,
  onChange,
  value,
  onKeyDown
}: AreaProps) => {
  return (
    <InputWrapper>
      <AreaInput
        maxRows={2}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
    </InputWrapper>
  )
}
