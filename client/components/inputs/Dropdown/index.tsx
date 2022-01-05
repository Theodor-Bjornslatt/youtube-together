import React, { useEffect, useRef, useState } from 'react'
import { GenericObject } from '../../../hooks/useForm'

import {
  InputWrapper,
  Label,
  WrapperInner
} from '../TextInput/textInput.styled'
import { Arrow, Options, OptionsWrapper, Select } from './Dropdown.styled'

type DropdownProps = {
  label?: string
  title?: string
  options: { [key: string]: string }
  values: GenericObject
}

const Dropdown = ({ label, title, options, values }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(title)

  const dropDownRef: React.RefObject<HTMLDivElement> | null | undefined =
    useRef(null)

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element

    if (!dropDownRef.current) return
    if (!dropDownRef.current.contains(target)) {
      setIsOpen(false)
    }
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    const target = e.target as Element
    if (!dropDownRef.current) return
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
    if (e.key === 'Enter' && dropDownRef.current.contains(target)) {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <WrapperInner ref={dropDownRef}>
        <Select
          tabIndex={0}
          headline={title}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected}
          <Arrow />
        </Select>
        {isOpen && (
          <OptionsWrapper>
            {Object.keys(options).map((option, index) => (
              <Options
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSelected(option)
                    setIsOpen(false)
                    values.color = options[option]
                  }
                }}
                tabIndex={0}
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
