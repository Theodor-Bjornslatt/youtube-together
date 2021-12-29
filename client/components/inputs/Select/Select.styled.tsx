import styled from 'styled-components'

import { colors } from '../../../styles/variables'
import { inputBaseStyle, TextErrorProp } from '../TextInput/textInput.styled'

export const SelectStyled = styled.select<TextErrorProp>`
  min-width: 15rem;
  color: ${colors.darkest};
  ${inputBaseStyle};
`
export const SelectLabel = styled.label`
  color: ${colors.white};
`
