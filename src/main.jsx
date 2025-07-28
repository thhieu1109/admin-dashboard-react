import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CategoryProvider from './contexts/CategoryProvider.jsx'
import ProductProvider from './contexts/ProductProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>,
)
