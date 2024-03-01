import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import { ProductProvider } from './Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ProductProvider>
    <Router>
      <App />
    </Router>    
  </ProductProvider>
  // </React.StrictMode>,
)
