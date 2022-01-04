import { useContext } from 'react'
import Link from 'next/link'

import { GlobalContext } from '../../state/GlobalState'
import {
  FooterContainer,
  FooterContentContainer,
  FooterLinkSection
} from './Footer.styled'

export default function Footer() {
  const { state } = useContext(GlobalContext)
  return (
    <FooterContainer>
      <FooterContentContainer>
        <FooterLinkSection>
          <Link href={'/'}>Home</Link>
          <Link href={'/rooms'}>Rooms</Link>
          {!state.user && <Link href={'/login'}>Login</Link>}
        </FooterLinkSection>
        <FooterLinkSection>
          {state.user && <Link href={'/create-room'}>Create Room</Link>}
        </FooterLinkSection>
      </FooterContentContainer>
    </FooterContainer>
  )
}
