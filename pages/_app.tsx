import type { AppProps } from 'next/app'
import '../public/css/style.css';
import '../public/css/bootstrap.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
