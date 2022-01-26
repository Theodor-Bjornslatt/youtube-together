import styled from 'styled-components'

import { colors, spacings } from '../../styles/variables'

export const Container = styled.div`
  align-items: center;
  border-top: 1px solid ${colors.brown};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Form = styled.form`
  width: 100%;
`

export const StyledFormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${spacings.large} 0;
  width: 100%;
`
