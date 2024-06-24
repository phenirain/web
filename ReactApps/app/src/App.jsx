import axios from 'axios'
import React, { useEffect, useState} from 'react'
import Phones from './components/Phones'
import HomeItem from './components/HomeItem'
import Header from './components/Header'
import Overlay from './components/Overlay'
import Favorite from './components/Favorite'
import Footer from './components/Footer'
import Feedback from './components/FeedBack'
import AboutItem from './components/AboutItem'
import {Link, Route, Routes} from 'react-router-dom'


export const AppContext = React.createContext({});

const App = () => {

  const [aboutItem, setAboutItem] = useState([])
  const [cart, setCart] = useState([])
  const [overlays, setOverlays] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
      async function axiosData() {
        const cartData = await axios.get('http://localhost:3001/phones')
        const overlayData = await axios.get('http://localhost:3001/overlays')
        const favoriteData = await axios.get('http://localhost:3001/favorites')
        setCart(cartData.data)
        setOverlays(overlayData.data)
        setFavorites(favoriteData.data)
      }
      axiosData()
  })

  const isAdded = (myId, to) => {
    if (to === "overlays")
      return overlays.some((objIsAdded) => objIsAdded.myId === myId)
    else if (to === "favorites")
      return favorites.some((objIsAdded) => objIsAdded.myId === myId)
  }

  const deleteItem = (id, from) => {
    axios.delete(`http://localhost:3001/${from}/${id}`);
    if (from === "overlays")  
      setOverlays((over) => over.filter(item => Number(item.id) !== Number(id)));
    else if (from === "favorites") 
      setFavorites((favorite) => favorite.filter(favor => Number(favor.id) !== Number(id)));
  }
  

  const total_price = overlays.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (

    <AppContext.Provider
    value={{
      cart,
      setCart,
      overlays,
      setOverlays,
      isAdded,
      aboutItem,
      setAboutItem
    }}
    >
      <div class="content">
        <Header
        />
        <Routes>
          <Route
            path="/phones"
            element={
              <Phones
               item={cart}
               overlays={overlays}
               setOverlays={setOverlays}
               favorites={favorites}
               setFavorites={setFavorites}
               />
            }
          />
          <Route
            path="/overlays"
            element={
              <Overlay
               overlays={overlays}
               deleteItem={deleteItem}
               total_price={total_price}
               />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorite
               favorites={favorites}
               deleteItem={deleteItem}
               overlays={overlays}
               setOverlays={setOverlays}
               />
            }
          />
          <Route
            path="/"
            element={
              <HomeItem
              item={cart}
              overlays={overlays}
              setOverlays={setOverlays}
              favorites={favorites}
              setFavorites={setFavorites}
              />
            }
          />
          <Route
            path={"/About"}
            element={<AboutItem direction="About?"
              item={aboutItem}
              overlays={overlays}
              setOverlays={setOverlays}
              favorites={favorites}
              setFavorites={setFavorites}
               />}
          />
        </Routes>
        <Feedback/>
      </div>
      <Footer/>
    </AppContext.Provider>
  )
}

export default App