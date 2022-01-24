import Router from "next/router";
import NProgress from "nprogress";
import Head from 'next/head'
import '../styles/nprogress.css'
import '../styles/globals.css'
import '../styles/background.css'
import '../styles/button.css'

Router.onRouteChangeStart = url => {
  NProgress.configure({ showSpinner: false }).start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1,shrink-to-fit=no"
      />
      <meta name="author" content="GDSC Medi-Caps University" />
      <meta name="author" content="MUGDSC" />
      <meta name="description" content="Nakshatra is an enormous technical fest organized by Google Developers Student Club of Medi-Caps University." />
      <meta name="nakshatra" content="Nakshatra is an enormous technical fest organized by Google Developers Student Club of Medi-Caps University." />
      <meta name="nakshatra" content="Nakshatra is an enormous technical fest organized by GDSCMU" />
      <meta name="nakshatra" content="Nakshatra is an enormous technical fest organized by MUGDSC" />
      <meta name="GDSC Nakshatra" content="Nakshatra is an enormous technical fest organized by MUGDSC" />
      <meta name="MUGDSC Nakshatra" content="Nakshatra is an enormous technical fest organized by MUGDSC" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
