import styled from 'styled-components'

import {
  borders,
  headerBoxHeights,
  sizes,
  spacings
} from '../../styles/variables'
import { ButtonStyled } from '../Button/Button.styled'
import { MaxWidthContainerStyled } from '../MaxWidthContainer/MaxWidthContainer.styled'

export const CreateRoomFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(
    100vh - ${headerBoxHeights.desktop} - ${headerBoxHeights.desktop}
  );

  @media screen and (max-width: ${sizes.mobile}px) {
    height: calc(
      100vh - ${headerBoxHeights.mobile} - ${headerBoxHeights.mobile}
    );
  }
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
  margin-top: ${spacings.extraExtraSmall};
  background-color: inherit;
`

export const TextWithIconContainer = styled.h5`
  display: flex;
  justify-content: center;
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
  display: flex;
  border-bottom: ${borders.light};
`
