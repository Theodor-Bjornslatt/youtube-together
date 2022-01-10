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

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MessageListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: ${spacings.large};
  height: 500px;
  width: 100%;
  overflow-y: auto;
  padding: ${spacings.medium} ${spacings.small} 0 ${spacings.medium};
  @media screen and (max-width: ${sizes.mobile}px) {
    gap: ${spacings.small};
  }
`

export const Card = styled.div`
  background: ${colors.dark};
  padding: ${spacings.small} ${spacings.small} ${spacings.medium};
  position: relative;
  border-radius: ${borderRadius.small};
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: ${fontSizes.extraSmall};
  }
`

export const MessageContainer = styled.div`
  margin-top: ${spacings.extraSmall};
  p {
    color: ${(props) => props.color};
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
