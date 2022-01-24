import React from 'react'

import { CheckboxContainer, Label, StyledCheckbox } from './Checkbox.styled'

type CheckboxProps = {
  label: string
  onClick: () => void
  checked: boolean
}

const Checkbox = ({ label, onClick, checked }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <Label>{label}</Label>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        onClick={onClick}
        // @TODO - revisit
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    </CheckboxContainer>
  )
}

export default Checkbox
