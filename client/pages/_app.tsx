import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

import { GlobalStyle } from '../styles/globalStyle'
import { GlobalContextProvider } from '../state/GlobalState'
import Footer from '../components/Footer'
import SocketProvider from '../state/SocketContext'
import { whoAmI } from '../utils/api'

function App({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    async function getUser() {
      try {
        //look at res
        const user = await whoAmI()
        if (user.id) setLoggedIn(true)
      } catch (e) {
        setLoggedIn(false)
      }
    }
    getUser()
  }, [])

  return (
    <GlobalContextProvider isLoggedIn={loggedIn}>
      <SocketProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </SocketProvider>
    </GlobalContextProvider>
  )
}

export default App
