import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { GlobalContext } from '../../state/GlobalState'
import {
  FooterContainer,
  FooterContentContainer,
  FooterLinkSection,
  FooterPlaceHolder,
  LogoutButton
} from './Footer.styled'
import { logout } from '../../utils/api'

export default function Footer() {
  const { dispatch } = useContext(GlobalContext)
  const { state } = useContext(GlobalContext)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logout()
      dispatch({ type: 'loggedIn', payload: false })
    } catch (error) {
      return
    }
    router.push('/')
  }
  return (
    <FooterPlaceHolder>
      <FooterContainer>
        <FooterContentContainer>
          <FooterLinkSection>
            <Link href={'/'}>Home</Link>
            <Link href={'/rooms'}>Rooms</Link>
            {state.loggedIn && <Link href={'/create-room'}>Create Room</Link>}
          </FooterLinkSection>
          <FooterLinkSection>
            {!state.loggedIn ? (
              <Link href={'/login'}>Login</Link>
            ) : (
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            )}
          </FooterLinkSection>
        </FooterContentContainer>
      </FooterContainer>
    </FooterPlaceHolder>
  )
}
