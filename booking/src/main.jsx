import  {BrowserRouter}  from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Store } from './component/pages/Store.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={Store}>
    <App />
  </Provider>
</BrowserRouter>
)
