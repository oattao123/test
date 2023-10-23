import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

import { LoginPages } from './pages/LoginPages'
import { Route, Routes } from 'react-router-dom'
import { RegisterPages } from './pages/RegisterPages'
import { MarketPages } from './pages/MarketPages'


function App() {
  
  return (
    <>
   <Routes>
      <Route path="/" element={<LoginPages />} />
      <Route path="/login" element={<LoginPages />} />
      <Route path="/register" element={<RegisterPages />} />
      <Route path="/market" element={<MarketPages />} />
   </Routes>
    </>
  )
}

export default App
