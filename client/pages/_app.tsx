import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/globalStyle'
import { GlobalContextProvider } from '../state/GlobalState'
import Footer from '../components/Footer'

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </GlobalContextProvider>
  )
}

export default App
