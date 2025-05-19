import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ap from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Ap />
  </StrictMode>,
)
