import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from './CartItem'

const HomeItem = (props) => {
  return (
    <div class="container mt-3">
      <h1>Все товары: </h1>
      <CartItem
        item={props.item}
        overlays={props.overlays}
        setOverlays={props.setOverlays}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
      />
    </div>
  )
}

export default HomeItem