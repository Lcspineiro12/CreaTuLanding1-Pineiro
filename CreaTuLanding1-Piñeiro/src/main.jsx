import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css' // quita esta línea si usarás Bootstrap puro

// Si usas Bootstrap, descomenta la siguiente línea y comenta la de styles.css
// import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)