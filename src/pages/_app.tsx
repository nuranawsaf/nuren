import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store/store'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nuren Awsaf</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        
      </Provider>
    </>
  )
}

export default MyApp