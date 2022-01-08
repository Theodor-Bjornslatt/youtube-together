import { useContext } from 'react'
import Link from 'next/link'

import { GlobalContext } from '../../state/GlobalState'
import {
  FooterContainer,
  FooterContentContainer,
  FooterLinkSection,
  FooterPlaceHolder
} from './Footer.styled'

export default function Footer() {
  const { state } = useContext(GlobalContext)
  return (
    <FooterPlaceHolder>
      <FooterContainer>
        <FooterContentContainer>
          <FooterLinkSection>
            <Link href={'/'}>Home</Link>
            <Link href={'/rooms'}>Rooms</Link>
            {!state.loggedIn && <Link href={'/login'}>Login</Link>}
          </FooterLinkSection>
          <FooterLinkSection>
            {state.loggedIn && <Link href={'/create-room'}>Create Room</Link>}
          </FooterLinkSection>
        </FooterContentContainer>
      </FooterContainer>
    </FooterPlaceHolder>
  )
}
