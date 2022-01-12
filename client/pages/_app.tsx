import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

import { GlobalStyle } from '../styles/globalStyle'
import { GlobalContextProvider } from '../state/GlobalState'
import Footer from '../components/Footer'
import SocketProvider from '../state/SocketContext'
// import { whoAmI } from '../utils/api'

function App({ Component, pageProps }: AppProps) {
  // const [loggedIn, setLoggedIn] = useState(false)
  const loggedIn = false

  useEffect(() => {
    // async function getUser() {
    //   const res = await whoAmI()
    //   //look at res
    //   if (!res) return
    //   if (res.id) setLoggedIn(true)
    // }
    // getUser()
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
