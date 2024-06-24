import React from 'react'
import axios from 'axios';
import { AppContext } from '../App';

const AboutItem = (props) => {
    const context = React.useContext(AppContext);
    
    const {id, myId, from:from, mark:mark, model:model, price:price, feature:feature} = props.item;
    const onClickAdd = () => {
        onAdd({id, myId, from:from, mark:mark, model:model, price:price, feature:feature}, "overlays"); 
      }
    
      const onClickFavorite = () => {
        onAdd({id, myId, from:from, mark:mark, model:model, price:price, feature:feature}, "favorites"); 
      }

    const onAdd = (obj, from) => {
        console.log(obj);
        try{
          if (from === "overlays" && props.overlays.find(item => Number(item.id) === Number(obj.id))) {
            axios.delete(`http://localhost:3001/${from}/${obj.id}`);
            props.setOverlays((over) => over.filter(item => Number(item.id) !== Number(obj.id)));
          }
          else if (from === "favorites" && props.favorites.find(item => Number(item.id) === Number(obj.id))) {
            axios.delete(`http://localhost:3001/${from}/${obj.id}`);
            props.setFavorites((fav) => fav.filter(item => Number(item.id) !== Number(obj.id)));
          } else {
            axios.post(`http://localhost:3001/${from}`, obj);
            if (from === "overlays")
              props.setOverlays([...props.overlays, obj]);
            else if (from === "favorites")
              props.setFavorites([...props.favorites, obj]);
          }
        }
        catch(err) {
          alert(err);
        }
      }

  return (
    <div class="p-4">
        <h1>О товаре</h1>
        <h3>ID: {props.item.id}</h3>
        <h3>Страна: {props.item.from}</h3>
        <h3>Марка: {props.item.mark}</h3>
        <h3>Модель: {props.item.model}</h3>
        <h3>Цена: {props.item.price} Р</h3>
        <h3>Описание: {props.item.description}</h3>
        <h3>Фича: {props.item.feature}</h3>
        <div class="d-flex justify-content-between" style={{ width: "30em"}}>
            <button class="btn btn-primary" onClick={onClickAdd}>
                {
                    context.isAdded(props.item.myId, "overlays") ? "Добавлен" : "Добавить в корзину"
                }
            </button>
            <button class="btn btn-primary" onClick={onClickFavorite}>
                {
                    context.isAdded(props.item.myId, "favorites") ? "В избранном" : "Добавить в избранное"
                }
            </button>
        </div>
    </div>
  )
}

export default AboutItem