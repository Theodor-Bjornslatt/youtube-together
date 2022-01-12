import styled from 'styled-components'

import {
  borderRadius,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  sizes,
  spacings
} from '../../styles/variables'
import { MaxWidthContainerStyled } from '../MaxWidthContainer/MaxWidthContainer.styled'

export const ChatContainer = styled(MaxWidthContainerStyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const MessageListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 500px;
  width: 100%;
  overflow-y: auto;
  padding: ${spacings.small} ${spacings.small} 0 ${spacings.small};

  &:not(:last-child) {
    margin-bottom: -${spacings.extraSmall};
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    padding: ${spacings.small} ${spacings.extraSmall} 0
      ${spacings.extraExtraSmall};
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    padding: ${spacings.extraExtraSmall} ${spacings.extraExtraSmall} 0 0;
  }
`

export const Card = styled.div`
  background: ${colors.darkest};
  padding: 0 ${spacings.extraSmall};
  position: relative;
  border-radius: ${borderRadius.small};
  margin: 5px 0;
`
export const InfoContainer = styled.div`
  display: flex;
`

export const Name = styled.p`
  color: ${colors.white};
`
export const Time = styled.p`
  color: ${colors.white};
  font-size: 12px;
  margin-left: ${spacings.extraExtraSmall};
`

export const MessageContainer = styled.div`
  p {
    color: ${(props) => props.color};
    word-wrap: break-word;
  }
`

export const ChatButton = styled.button`
  font-family: ${fonts.roboto};
  background: ${colors.brown};
  border: none;
  border-radius: ${borderRadius.small};
  justify-content: center;
  align-items: center;
  padding: ${spacings.extraExtraSmall};
  width: 100%;
  color: ${colors.white};
  font-size: ${fontSizes.small};
  text-transform: uppercase;
  font-weight: ${fontWeights.bold};
  margin-top: ${spacings.extraExtraSmall};
  letter-spacing: 3px;

  &:hover {
    cursor: pointer;
  }
`
