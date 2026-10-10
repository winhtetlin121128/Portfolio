import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProjectDetail from './page/detail.jsx'
import { Route, BrowserRouter, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Project:id' element={<ProjectDetail />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
