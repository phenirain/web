import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Overlay = (props) => {
  return (
    <div class="container mt-3">
      <h2 class="overlay">Корзина: </h2>
      <h2 class="mb-3">На общую сумму: {props.total_price}</h2>
        
        {
          props.overlays.length > 0 ? (
            <div class="row">
                {
                  props.overlays.map(obj => (
                    <div class="col-md-4">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Страна: {obj.from}</Card.Title>
                            <Card.Text>
                            Марка: {obj.mark}
                            </Card.Text>
                            <Card.Text>
                            Модель: {obj.model}
                            </Card.Text>
                            <Card.Text>
                            Цена: {obj.price}
                            </Card.Text>
                            <Button onClick={() => props.deleteItem(obj.id, "overlays")}>
                              Удалить
                            </Button>
                        </Card.Body>
                      </Card> 
                    </div>
                  ))
                }
            </div>
          ) : (
            <h1>В корзине пусто</h1>
          )
        }
    </div>

  );
}

export default Overlay