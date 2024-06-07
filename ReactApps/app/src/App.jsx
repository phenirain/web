import axios from 'axios'
import React, { useEffect, useState} from 'react'
import CartItem from './components/CartItem'
import HomeItem from './components/HomeItem'
import Header from './components/Header'
import {Link, Route, Routes} from 'react-router-dom'

const App = () => {

  const [testData, setCart] = useState([])

  useEffect(() => {
      async function axiosData() {
        const cartData = await axios.get('http://localhost:3001/tables')
        setCart(cartData.data)
      }
      axiosData()
  })
  return (
    <div>
      <Header/>
      <Routes>
        <Route
          path="/tables"
          element={
            <CartItem item={testData}/>
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