import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Bounce, Slide, ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <ToastContainer position='top-left' theme='light' transition={Bounce} />
    <App />
  </BrowserRouter>
  // </StrictMode>,
)
