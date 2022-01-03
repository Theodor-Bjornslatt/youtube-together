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
export const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`

export const MessageListContainer = styled.div`
  display: grid;
  align-items: flex-start;
  flex-direction: column-reverse;
  gap: ${spacings.large};
  height: 500px;
  width: 100%;
  padding: ${spacings.extraLarge} ${spacings.huge};
  overflow-y: auto;

  @media screen and (max-width: ${sizes.tablet}px) {
    padding: ${spacings.small} ${spacings.medium};
  }
`

export const Card = styled.div`
  background: ${colors.dark};
  padding: ${spacings.extraExtraSmall};
  position: relative;
  border-radius: ${borderRadius.small};
`

export const UserName = styled.div`
  font-size: ${fontSizes.extraSmall};
  color: ${colors.white};
  position: absolute;
  top: ${spacings.extraExtraSmall};
  right: ${spacings.extraSmall};
`

export const MsgDiv = styled.div`
  padding: ${spacings.medium} ${spacings.extraSmall};
  color: ${(props) => props.color};
`

export const TimeDiv = styled.div`
  position: absolute;
  top: ${spacings.extraExtraSmall};
  left: ${spacings.extraSmall};
  font-size: ${fontSizes.extraSmall};
  color: ${colors.white};
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
