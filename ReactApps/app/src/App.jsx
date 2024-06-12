import axios from 'axios'
import React, { useEffect, useState} from 'react'
import CartItem from './components/CartItem'
import HomeItem from './components/HomeItem'
import Header from './components/Header'
import {Link, Route, Routes} from 'react-router-dom'

const App = () => {

  const [cart, setCart] = useState([])

  useEffect(() => {
      async function axiosData() {
        const cartData = await axios.get('http://localhost:3001/phones')
        setCart(cartData.data)
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