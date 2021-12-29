import Link from 'next/link'

import {
  FooterContainer,
  FooterContentContainer,
  FooterLinkSection
} from './Footer.styled'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <FooterLinkSection>
          <Link href={'/'}>Home</Link>
          <Link href={'/rooms'}>Rooms</Link>
          <Link href={'/login'}>Login</Link>
        </FooterLinkSection>
        <FooterLinkSection>
          <Link href={'/create-room'}>Create Room</Link>
        </FooterLinkSection>
      </FooterContentContainer>
    </FooterContainer>
  )
}
