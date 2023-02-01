import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './pages'
import './global.css'
import Header from './components/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Router />
  </React.StrictMode>
)
