import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider, WomenFilterProvider } from './components/ContextApi.JSX'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterProvider >
     <WomenFilterProvider>
    <App />
    </WomenFilterProvider>
    </FilterProvider>
  </React.StrictMode>,
)
