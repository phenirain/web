import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from './CartItem'

const HomeItem = (props) => {
  return (
    <div class="container mt-3">
      <h1>Коротко о нашем магазине</h1>
      <h4>Магазин иностранных телефонов</h4>
      <h4>Здесь ты найдешь модель под себя</h4>
      <CartItem
        item={props.item.slice(0, 10)}
        overlays={props.overlays}
        setOverlays={props.setOverlays}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
      />
    </div>
  )
}

export default HomeItem