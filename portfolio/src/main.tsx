import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToggleProvider } from './ToggleContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToggleProvider>
      <title>Barna István Soós</title>
      <App />
    </ToggleProvider>
  </StrictMode>,
)
