import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from "@/components/ui/toaster"
import { Provider } from 'react-redux'
import { store } from '@/slices/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Toaster />
    </Provider>
  )
}