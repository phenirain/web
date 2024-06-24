import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion'

const Overlay = (props) => {
  return (
    <motion.div class="container mt-3"
    initial={{opacity: 0, y: 100, x: -100}}
    animate={{opacity: 1, y: 0, x: 0}}
    transition={{duration: 0.9}}
    >
      <h2 class="overlay">Корзина: </h2>
      <h2 class="mb-3">На общую сумму: {props.total_price}</h2>
        
        {
          props.overlays.length > 0 ? (
            <div class="row">
                {
                  props.overlays.map(obj => (
                    <div class="col-md-4">
                      <Card style={{ width: '21rem' }}>
                        <Card.Body>
                            <div class="d-flex justify-content-between">
                              <Card.Title>Страна: {obj.from}</Card.Title>
                              <Button onClick="">
                                О товаре
                              </Button>
                            </div>
                            <Card.Text>
                            Марка: {obj.mark}
                            </Card.Text>
                            <Card.Text>
                            Модель: {obj.model}
                            </Card.Text>
                            <Card.Text>
                            Цена: {obj.price}
                            </Card.Text>
                            <Card.Text>
                            Фича: {obj.feature}
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
    </motion.div>

  );
}

export default Overlay