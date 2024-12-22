import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import ModalEnd from './modal/ModalEnd.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalEnd>
      < App />
    </ModalEnd>
  </StrictMode>,
)
