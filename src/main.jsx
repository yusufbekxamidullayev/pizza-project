import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChangeLanguageContext from './context/ChangeLanguageContext.jsx'
import CartProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChangeLanguageContext>
      <CartProvider>
        <App />
      </CartProvider>
    </ChangeLanguageContext>
  </StrictMode>,
)
