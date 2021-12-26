import styled from 'styled-components'

import { maxWidths, sizes, spacings } from '../../styles/variables'

type Size = 'small' | 'medium' | 'large' | undefined

type StyledMaxWidthProps = {
  size?: Size
}

function getMaxWidth(size: Size) {
  switch (size) {
    case 'small':
      return maxWidths.small
    case 'medium':
      return maxWidths.medium
    case 'large':
      return maxWidths.large
    default:
      return maxWidths.medium
  }
}

export const MaxWidthContainer = styled.div<StyledMaxWidthProps>`
  display: flex;
  max-width: ${(props) => getMaxWidth(props?.size)}px;
  height: 100%;
  width: calc(100% - ${spacings.extraLarge} - ${spacings.extraLarge});
  margin: 0 ${spacings.extraLarge};

  @media screen and (max-width: ${sizes.tablet}px) {
    width: calc(100% - ${spacings.small} - ${spacings.small});
    margin: 0 ${spacings.small};
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    width: calc(100% - ${spacings.extraSmall} - ${spacings.extraSmall});
    margin: 0 ${spacings.extraSmall};
  }
`

export default MaxWidthContainer
