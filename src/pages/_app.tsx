import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/globals.css'
import SwiperCore, { Navigation, Pagination } from 'swiper'

function MyApp({ Component, pageProps }: AppProps) {
  SwiperCore.use([Navigation, Pagination]);
  
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
