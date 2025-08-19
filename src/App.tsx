import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { HelmetProvider, Helmet } from '@dr.pogodin/react-helmet'

import './styles/styles.css'
import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App () {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza.shop' />
      <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
        <Toaster richColors theme='system' />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
