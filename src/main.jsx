import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// connecting with id root
ReactDOM.createRoot(document.getElementById('root')).render(
  // wrapper to check the potential problem in the <App /> such as deprecated, legacy context, etc
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
