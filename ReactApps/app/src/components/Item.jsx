import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App';

const Item = (props) => {

  const context = React.useContext(AppContext);

  const onClickAdd = () => {
    const {id, myId, from:from, mark:mark, model:model, price:price} = props;
    props.onPlus({id, myId, from:from, mark:mark, model:model, price:price}, "overlays"); 
  }

  const onClickFavorite = () => {
    const {id, myId, from:from, mark:mark, model:model, price:price} = props;
    props.onPlus({id, myId, from:from, mark:mark, model:model, price:price}, "favorites"); 
  }

  return (
    <div class="col-md-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Страна: {props.from}</Card.Title>
          <Card.Text>
            Марка: {props.mark}
          </Card.Text>
          <Card.Text>
            Модель: {props.model}
          </Card.Text>
          <Card.Text>
            Цена: {props.price} Р
          </Card.Text>
          <div class="d-flex justify-content-between card-btns">
            <Button onClick={onClickAdd}>
              {
                context.isAdded(props.myId, "overlays") ? "Добавлен" : "Добавить в корзину"
              }
            </Button>
            <Button onClick={onClickFavorite}>
              {
                context.isAdded(props.myId, "favorites") ? "В избранном" : "Добавить в избранное"
              }
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item 