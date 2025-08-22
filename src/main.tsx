import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { enableMsw } from './tests/mocks'

enableMsw().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
})
