import React, { useEffect, useRef, useState } from 'react'

import { Label, WrapperInner } from '../TextInput/textInput.styled'
import {
  Arrow,
  DropdownWrapper,
  Options,
  OptionsWrapper,
  Select
} from './Dropdown.styled'

type DropdownProps = {
  label?: string
  title?: string
  options: { [key: string]: string }
  values: { [key: string]: string }
}

const Dropdown = ({ label, title, options, values }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(title)

  const dropDownRef = useRef<HTMLDivElement>(null)
  const selectRef = useRef<HTMLDivElement>(null)

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
      toggleSelect()
    }
    if (e.key === 'Enter' && dropDownRef.current.contains(target)) {
      toggleSelect()
    }
  }

  const setValuesAndClose = (option: string) => {
    setSelected(option)
    setIsOpen(false)
    values.color = options[option]
  }

  const toggleSelect = () => {
    setSelected(title)
    setIsOpen((prev) => !prev)
    if (!selectRef.current) return
    if (isOpen) selectRef.current.blur()
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
    <DropdownWrapper>
      {label && <Label>{label}</Label>}
      <WrapperInner ref={dropDownRef}>
        <Select
          ref={selectRef}
          tabIndex={0}
          headline={title}
          onClick={() => toggleSelect()}
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
                    setValuesAndClose(option)
                  }
                }}
                tabIndex={0}
                key={index}
                onClick={() => {
                  setValuesAndClose(option)
                }}
              >
                {option}
              </Options>
            ))}
          </OptionsWrapper>
        )}
      </WrapperInner>
    </DropdownWrapper>
  )
}

export default Dropdown
