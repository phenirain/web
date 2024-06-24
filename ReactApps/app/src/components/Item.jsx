import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
  const navigate = useNavigate()
  const context = React.useContext(AppContext);

  const onAboutClick = () => {
    const {id, myId, from:from, mark:mark, model:model, price:price, feature:feature, description: description} = props;
    context.setAboutItem({id, myId, from:from, mark:mark, model:model, price:price, feature:feature, description:description});
    return (
      navigate("/About")
    )
  }

  const onClickAdd = () => {
    const {id, myId, from:from, mark:mark, model:model, price:price, feature:feature} = props;
    props.onPlus({id, myId, from:from, mark:mark, model:model, price:price, feature:feature}, "overlays"); 
  }

  const onClickFavorite = () => {
    const {id, myId, from:from, mark:mark, model:model, price:price, feature:feature} = props;
    props.onPlus({id, myId, from:from, mark:mark, model:model, price:price, feature:feature}, "favorites"); 
  }

  return (
    <div class="col-md-3">
      <Card style={{ width: '21em' }}>
        <Card.Body>
        <div class="mt-2 d-flex justify-content-between">
          <Card.Title>Страна: {props.from}</Card.Title>
          <Button onClick={onAboutClick}>
              О товаре
            </Button>
          </div>
          <Card.Text>
            Марка: {props.mark}
          </Card.Text>
          <Card.Text>
            Модель: {props.model}
          </Card.Text>
          <Card.Text>
            Цена: {props.price} Р
          </Card.Text>
          <Card.Text>
            Фича: {props.feature}
          </Card.Text>
          <div class="d-flex justify-content-between card-btns mt-2">
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