import axios from 'axios'
import React, { useEffect, useState} from 'react'
import CartItem from './components/CartItem'
import HomeItem from './components/HomeItem'
import Header from './components/Header'
import Overlay from './components/Overlay'
import {Link, Route, Routes} from 'react-router-dom'

const App = () => {

  const [cart, setCart] = useState([])
  const [overlay, setOverlay] = useState([])

  useEffect(() => {
      async function axiosData() {
        const cartData = await axios.get('http://localhost:3001/phones')
        const overlayData = await axios.get('http://localhost:3001/overlays')
        setCart(cartData.data)
        setOverlay(overlayData.data)
      }
      axiosData()
  })
  return (
    <div>
      <Header/>
      <Routes>
        <Route
          path="/phones"
          element={
            <CartItem item={cart}/>
          }
        />
        <Route
          path="/overlay"
          element={
            <Overlay item={overlay}/>
          }
        />
        <Route
          path="/"
          element={
            <HomeItem/>
          }
        />
      </Routes>
    </div>
  )
}

export default App