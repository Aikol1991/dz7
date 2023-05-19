import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import ProductsList from './components/ProductsList'
import CartPage from './pages/CartPage'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<NavBar/>}>
      <Route index element={<ProductsList/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Route>
   </Routes>
   </BrowserRouter> 
  )
}

export default App
