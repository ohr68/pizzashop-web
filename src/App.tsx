import { RouterProvider } from 'react-router-dom'
import './styles/styles.css'
import { router } from './routes'

export function App () {
  return (
    <RouterProvider router={router} />
  )
}
