import styled from 'styled-components'

import { colors } from '../../../styles/variables'
import { inputBaseStyle } from '../TextInput/textInput.styled'

export const SelectStyled = styled.select`
  min-width: 15rem;
  color: ${colors.darkest};
  ${inputBaseStyle};
`
export const SelectLabel = styled.label`
  color: ${colors.white};
`
