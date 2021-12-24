import React from 'react'
import classNames from 'classnames'

import { TextInputContainer } from './textInput.styled'

export type InputProps = {
  label?: string
  placeholder?: string
  error?: string
  name: string
  value: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  required?: boolean
  type?: string
}

export const TextInput: React.FC<InputProps> = ({
  name,
  type = 'text',
  error,
  label,
  placeholder,
  onChange,
  value
}) => {
  const inputNames = classNames('input', { 'input-error': !!error })
  const labelNames = classNames('label', { 'label-error': !!error })
  return (
    <TextInputContainer>
      <div className="input-wrapper">
        {label && <label className={labelNames}>{label}</label>}
        <div className="wrapper-inner">
          <input
            className={inputNames}
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
          />
        </div>
        {error && <span className="error">{error}</span>}
      </div>
    </TextInputContainer>
  )
}
