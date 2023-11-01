import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FormikApp from './formikYup/FormikApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormikApp />
  </React.StrictMode>,
)
