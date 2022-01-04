import React, { useState } from 'react'
import { GenericObject } from '../../../hooks/useForm'

import {
  InputWrapper,
  Label,
  WrapperInner
} from '../TextInput/textInput.styled'
import { Arrow, Options, OptionsWrapper, Select } from './Dropdown.styled'

type DropdownProps = {
  label?: string
  error?: string
  title?: string
  options: { [key: string]: string }
  values: GenericObject
}

function Dropdown({ label, title, error, options, values }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(title)

  return (
    <InputWrapper>
      {label && <Label hasErrorMsg={error !== undefined}>{label}</Label>}
      <WrapperInner>
        <Select name={title} onClick={() => setIsOpen(!isOpen)}>
          {selected}
          <Arrow />
        </Select>
        {isOpen && (
          <OptionsWrapper>
            {Object.keys(options).map((option, index) => (
              <Options
                key={index}
                onClick={() => {
                  setSelected(option)
                  setIsOpen(false)
                  values.color = options[option]
                }}
              >
                {option}
              </Options>
            ))}
          </OptionsWrapper>
        )}
      </WrapperInner>
    </InputWrapper>
  )
}

export default Dropdown
