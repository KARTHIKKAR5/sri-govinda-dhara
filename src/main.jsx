import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter allows React Router to read the URL and show the right page. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
