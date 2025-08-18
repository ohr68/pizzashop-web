import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { HelmetProvider, Helmet } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza.shop' />
      <App />
    </HelmetProvider>
  </StrictMode>
)
