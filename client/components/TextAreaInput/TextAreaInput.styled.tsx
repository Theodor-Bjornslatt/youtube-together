import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

import { colors, borders } from '../../styles/variables'
import { inputBaseStyle } from '../TextInput/textInput.styled'

export const AreaInput = styled(TextareaAutosize)`
  ${inputBaseStyle}
  border: ${borders.light};
  color: ${colors.darkest};
  resize: none;

  &:focus {
    border: 1px solid lightpink;
    outline: none;
    box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  }
`
