import React from 'react';
import Item from './Item';
import axios from 'axios';
import {motion} from 'framer-motion';

const CartItem = (props) => {

    const onAdd = (obj, from) => {
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
    <motion.div class="container mt-5 mb-5"
    initial={{opacity: 0, y: 100, x: -100}}
    animate={{opacity: 1, y: 0, x: 0}}
    transition={{duration: 0.9}}
    >
      <div class="row">
        {
            props.item.map(obj=> {
                return <Item
                key={obj.id} 
                id={obj.id}
                
                myId={obj.myId}
                from={obj.from}
                mark={obj.mark}
                model={obj.model}
                price={obj.price}
                feature={obj.feature}
                description={obj.description}
                onPlus={(cartObj, from) => onAdd(cartObj, from)}
                />
            })
        }
      </div>
    </motion.div>
  )
}

export default CartItem