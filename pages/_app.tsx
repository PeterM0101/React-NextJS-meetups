import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { IsLoadingContextProvader } from '../components/store/isLoadingContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IsLoadingContextProvader>
      <Layout>
        <></>
        <Component {...pageProps} />
      </Layout>
    </IsLoadingContextProvader>
  )
}

export default MyApp
