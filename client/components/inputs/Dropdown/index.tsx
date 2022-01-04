import React, { useState } from 'react'

import {
  InputWrapper,
  Label,
  WrapperInner
} from '../TextInput/textInput.styled'
import { Arrow, Options, OptionsWrapper, Select } from './Dropdown.styled'

type DropdownProps = {
  label?: string
  error?: string
  name?: string
  options: { [key: string]: string }
  onChange: (e: React.ChangeEvent<any>) => void
}

function Dropdown({ label, name, error, options, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Chose color')

  return (
    <InputWrapper>
      {label && <Label hasErrorMsg={error !== undefined}>{label}</Label>}
      <WrapperInner>
        <Select
          name={name}
          value={options[selected]}
          onClick={() => setIsOpen(!isOpen)}
          onChange={onChange}
          //Skicka ner value och sätta som value.color = options[selected]
        >
          {console.log(options[selected])}
          {selected}
          <Arrow></Arrow>
        </Select>
        {isOpen && (
          <OptionsWrapper>
            {Object.keys(options).map((option, index) => (
              <Options
                key={index}
                onClick={() => {
                  setSelected(option)
                  setIsOpen(false)
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
