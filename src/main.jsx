import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TotalPriceProvider } from './Context/CartTotalContext.jsx'
// import { FilterProvider, WomenFilterProvider } from './components/ContextApi.JSX'
import { ItemTotalProvider } from './Context/ItemsTotalContext.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
// Could not resolve "./components/ContextApi.JSX" from "src/main.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ItemTotalProvider>
    <TotalPriceProvider>  
    <App />
    </TotalPriceProvider>
    </ItemTotalProvider>
    </AuthProvider>
  </React.StrictMode>,
  
)
