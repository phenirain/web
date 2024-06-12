import React from 'react'
import Item from './Item'

const CartItem = (props) => {
  return (
    <div>
        {
            props.item.map(obj=> {
                return <Item
                key={obj.id} 
                id={obj.id}
                
                from={obj.from}
                mark={obj.mark}
                model={obj.model}
                price={obj.price}
                />
            })
        }
    </div>
  )
}

export default CartItem