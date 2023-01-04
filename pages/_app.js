import { LynxProvider } from '../components/LynxProvider';
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <LynxProvider>
      <Component {...pageProps} />
    </LynxProvider>
  )
}

export default MyApp
