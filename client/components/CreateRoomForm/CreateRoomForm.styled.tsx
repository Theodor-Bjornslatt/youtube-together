import styled from 'styled-components'

import { sizes, spacings } from '../../styles/variables'
import { ButtonStyled } from '../Button/Button.styled'
import { MaxWidthContainerStyled } from '../MaxWidthContainer/MaxWidthContainer.styled'

export const CreateRoomFormContainer = styled.div`
  margin-top: ${spacings.extraLarge};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const GridContainer = styled(MaxWidthContainerStyled)`
  display: grid;
  grid-auto-flow: column;
  gap: ${spacings.extraLarge};

  @media screen and (max-width: ${sizes.mobile}px) {
    grid-auto-flow: row;
    gap: ${spacings.extraSmall};
  }
`

export const SubmitButton = styled(ButtonStyled)`
  background-color: inherit;
`

export const Form = styled.form`
  display: grid;
  flex-direction: column;
  gap: ${spacings.small};
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
