import type { AppProps } from 'next/app'
import '../styles/globals.css'

import { GlobalStyle } from '../styles/globalStyle'
import { GlobalContextProvider } from '../state/GlobalState'
import Footer from '../components/Footer'
import SocketProvider from '../state/SocketContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <SocketProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </SocketProvider>
    </GlobalContextProvider>
  )
}

export default App
