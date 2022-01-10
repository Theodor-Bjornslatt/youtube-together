import React from 'react'

import { CheckboxContainer, Label, StyledCheckbox } from './Checkbox.styled'

type CheckboxProps = any

const Checkbox = ({ label, onClick, checked }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <Label>{label}</Label>
      <StyledCheckbox type="checkbox" checked={checked} onClick={onClick} />
    </CheckboxContainer>
  )
}

export default Checkbox
