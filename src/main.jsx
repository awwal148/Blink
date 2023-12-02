import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TotalPriceProvider } from './Context/CartTotalContext.jsx'
import { FilterProvider, WomenFilterProvider } from './components/ContextApi.JSX'
import { ItemTotalProvider } from './Context/ItemsTotalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemTotalProvider>
    <TotalPriceProvider>  
    <FilterProvider >
     <WomenFilterProvider>
    <App />
    </WomenFilterProvider>
    </FilterProvider>
    </TotalPriceProvider>
    </ItemTotalProvider>
  </React.StrictMode>,
  
)
