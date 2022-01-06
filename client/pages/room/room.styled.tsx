import styled from 'styled-components'

import { headerBoxHeights } from '../../styles/variables'

export const Container = styled.div`
  display: grid;
  height: auto;
  grid-template-areas: 'chat aside';
  grid-template-columns: 4fr 1fr;
`

export const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  grid-area: chat;
`
export const Aside = styled.div`
  width: 100%;
  height: calc(100vh - ${headerBoxHeights.desktop});
  grid-area: aside;
`
