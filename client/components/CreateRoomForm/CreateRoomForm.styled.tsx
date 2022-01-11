import styled from 'styled-components'

import { sizes, spacings } from '../../styles/variables'
import { ButtonStyled } from '../Button/Button.styled'
import { MaxWidthContainerStyled } from '../MaxWidthContainer/MaxWidthContainer.styled'

export const CreateRoomFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

export const CreateRoomMaxContainer = styled(MaxWidthContainerStyled)`
  justify-content: center;
`

export const CreateRoomFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`

export const GridContainer = styled(MaxWidthContainerStyled)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: ${spacings.huge};
  justify-items: flex-end;

  @media screen and (max-width: ${sizes.mobile}px) {
    grid-auto-flow: 1fr;
    gap: ${spacings.extraSmall};
  }
`

export const SubmitButton = styled(ButtonStyled)`
  margin-top: ${spacings.extraLarge};
  background-color: inherit;
`

export const Form = styled.form`
  margin-top: ${spacings.extraLarge};
  width: 100%;
  margin-bottom: ${spacings.extraExtraSmall};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const PlaylistHeightContainer = styled.div`
  height: 40vh;
`
