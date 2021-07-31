import '../styles/globals.css'
import '../styles/styles.css'
import AuthContext from '../Context/context'
import AppContext from '../Context/AppProvider'
function MyApp({ Component, pageProps }) {
  return <AuthContext>
    <AppContext>
    <Component {...pageProps} />
    </AppContext>
  </AuthContext>
}

export default MyApp
