import styled from 'styled-components'

import {
  borderRadius,
  colors,
  fontSizes,
  fontWeights,
  sizes,
  spacings
} from '../../../styles/variables'

export const StyledChatMsg = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background: ${colors.darkest};
  width: 90%;
  height: 25rem;
  margin-bottom: ${spacings.extraExtraSmall};
  overflow: scroll;
  @media screen and (max-width: ${sizes.mobile}px) {
    width: 98%;
  }
`

export const MessageContainer = styled.div`
  width: 90%;
  margin: auto;
  @media screen and (max-width: ${sizes.mobile}px) {
    width: 98%;
  }
`
export const Card = styled.div`
  background: ${colors.dark};
  padding: 5px;
  margin-top: ${spacings.medium};
  position: relative;
  border-radius: ${borderRadius.small};
  &:last-child {
    margin-bottom: ${spacings.extraSmall};
  }
  @media screen and (max-width: ${sizes.mobile}px) {
    margin-top: ${spacings.extraExtraSmall};
  }
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
  color: pink;
`
export const TimeDiv = styled.div`
  position: absolute;
  top: ${spacings.extraExtraSmall};
  left: ${spacings.extraSmall};
  font-size: ${fontSizes.extraSmall};
  color: ${colors.white};
`
export const ChatButton = styled.button`
  background: ${colors.brown};
  border: none;
  border-radius: ${borderRadius.small};
  justify-content: 'center';
  align-items: 'center';
  padding: ${spacings.extraExtraSmall};
  width: '100%';
  color: ${colors.white};
  font-size: ${fontSizes.small};
  text-transform: uppercase;
  font-weight: ${fontWeights.bold};
  margin-top: 10px;
  letter-spacing: 3px;
  &:hover {
    cursor: pointer;
  }
`
