import React from 'react'
import CartItem from './CartItem';
import 'bootstrap/dist/css/bootstrap.min.css';


const Phones = (props) => {
  return (
    <div class="container mt-3">
      <h1>Телефоны: </h1>
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

export default Phones