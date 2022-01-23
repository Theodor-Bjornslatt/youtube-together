import ProgressBar from '@badrap/bar-of-progress'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import '../styles/globals.css'
import Head from 'next/head'

import { GlobalStyle } from '../styles/globalStyle'
import { GlobalContextProvider } from '../state/GlobalState'
import Footer from '../components/Footer'
import SocketProvider from '../state/SocketContext'
import { whoAmI } from '../utils/api'
import { colors } from '../styles/variables'

function App({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState(false)

  const progress = new ProgressBar({
    size: 1,
    color: `${colors.transparentPink}`,
    className: 'bar-of-progress',
    delay: 0
  })

  Router.events.on('routeChangeStart', progress.start)
  Router.events.on('routeChangeComplete', progress.finish)
  Router.events.on('routeChangeError', progress.finish)

  useEffect(() => {
    async function getUser() {
      try {
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
        <Head>
          <title>Watch Together</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, maximum-scale=1, width=device-width"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </SocketProvider>
    </GlobalContextProvider>
  )
}

export default App
