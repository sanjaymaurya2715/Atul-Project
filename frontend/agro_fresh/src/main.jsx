import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import PathMapper from './PathMapper.jsx'
import './css/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <PathMapper/>
    {/* <App /> */}
  </StrictMode>,
)
