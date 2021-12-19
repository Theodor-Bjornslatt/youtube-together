import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/globalStyle'
import { GlobalContextProvider } from '../state/GlobalState'

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default App
