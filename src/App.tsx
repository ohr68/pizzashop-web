import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { HelmetProvider, Helmet } from '@dr.pogodin/react-helmet'

import './styles/styles.css'
import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'

export function App () {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza.shop' />
      <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
        <Toaster richColors theme='system' />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
