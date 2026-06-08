import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/routes/Routes.jsx'
import GlobalStyles from './styles/globalstyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
