import styled from 'styled-components'

import { colors, fontSizes, spacings } from '../../../styles/variables'

export const StyledChatMsg = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background: ${colors.darkest};
  width: 90%;
  min-height: 20rem;
  overflow: scroll;
`

export const MessageContainer = styled.div`
  width: 90%;
  margin: auto;
`
export const Card = styled.div`
  background: ${colors.dark};
  padding: 5px;
  margin-top: 2rem;
  position: relative;
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
