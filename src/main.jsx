import React from 'react'
import ReactDOM from 'react-dom/client'
import {AutoApp} from './AutoApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AutoApp />
    </BrowserRouter>
  </React.StrictMode>,
)
