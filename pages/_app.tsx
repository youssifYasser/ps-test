import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { Tajawal } from '@next/font/google'

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800'],
})

function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  return (
    <div dir={locale === 'en' ? 'ltr' : 'rtl'} className={tajawal.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
