import { TextInputContainer } from './textInput.styled'
import classNames from 'classnames'
import React from 'react'

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
  const inputNames = classNames('input-text', { 'input-text-error': !!error })
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
