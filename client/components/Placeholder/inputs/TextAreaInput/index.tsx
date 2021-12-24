import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { InputProps } from '../TextInput'
import { TextAreaInputContainer } from './TextAreaInput.styled'

export const TextAreaInput: React.FC<InputProps> = ({
  name,
  error,
  label,
  placeholder,
  onChange,
  value
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [text, setText] = useState('')
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  useEffect(() => {
    if (textAreaRef.current) {
      setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`)
    }
  }, [text])

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event)
    }
    setTextAreaHeight('auto')
    setText(event.target.value)
  }

  const inputClassNames = classNames('input', { 'input-error': !!error })
  const labelClassNames = classNames('label', { 'label-error': !!error })

  return (
    <TextAreaInputContainer>
      <div className="input-wrapper">
        {label && <label className={labelClassNames}>{label}</label>}
        <div className="wrapper-inner">
          <textarea
            className={inputClassNames}
            name={name}
            placeholder={placeholder}
            onChange={(e) => onChangeHandler(e)}
            rows={1}
            value={value}
            ref={textAreaRef}
            style={{ height: textAreaHeight }}
          />
        </div>
        {error && <span className="error">{error}</span>}
      </div>
    </TextAreaInputContainer>
  )
}
