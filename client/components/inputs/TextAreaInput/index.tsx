import React from 'react'

import { InputWrapper } from '../TextInput/textInput.styled'
import { AreaInput } from './TextAreaInput.styled'

type AreaProps = {
  placeholder?: string
  name: string
  value: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  required?: boolean
  type?: string
}

export const TextAreaInput = ({
  name,
  placeholder,
  onChange,
  value
}: AreaProps) => {
  return (
    <InputWrapper>
      <AreaInput
        maxRows={2}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  )
}
