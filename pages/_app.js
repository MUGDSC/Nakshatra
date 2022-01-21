import Router from "next/router";
import NProgress from "nprogress";
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
  return <Component {...pageProps} />
}

export default MyApp
