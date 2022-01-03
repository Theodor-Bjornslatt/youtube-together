import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

import { GlobalStyle } from '../styles/globalStyle'
import { GlobalContextProvider, User } from '../state/GlobalState'
import Footer from '../components/Footer'
import SocketProvider from '../state/SocketContext'

function App({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<{ user: User | undefined }>({
    user: undefined
  })

  useEffect(() => {
    async function whoAmI() {
      const res = await fetch('http://localhost:8080/api/whoami', {
        credentials: 'include'
      })
      if (!res.ok) return
      const data = await res.json()
      setData(data)
    }
    whoAmI()
  }, [])

  return (
    <GlobalContextProvider {...data}>
      <SocketProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </SocketProvider>
    </GlobalContextProvider>
  )
}

export default App
