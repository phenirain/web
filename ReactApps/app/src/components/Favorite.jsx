import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App';
import axios from 'axios';
import {motion} from 'framer-motion';

const Favorite = (props) => {

  const context = React.useContext(AppContext);


  return (
    <motion.div class="container mt-3" 
    initial={{opacity: 0, y: 100, x: -100}}
    animate={{opacity: 1, y: 0, x: 0}}
    transition={{duration: 0.9}}
    >
      <h2 class="overlay mb-5">Избранное: </h2>
        
        {
          props.favorites.length > 0 ? (
            <div class="row">
                {
                  props.favorites.map(obj => (
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
                            <div class="d-flex justify-content-between card-btns mt-2">
                              <Button onClick={() => props.deleteItem(obj.id, "favorites")}>
                                Удалить
                              </Button>
                              <Button onClick={() => {
                                try {
                                  if (props.overlays.find(item => Number(item.id) === Number(obj.id))) {
                                    axios.delete(`http://localhost:3001/overlays/${obj.id}`);
                                    props.setOverlays((over) => over.filter(item => Number(item.id) !== Number(obj.id)));
                                  } else {
                                    axios.post(`http://localhost:3001/overlays`, obj);
                                    props.setOverlays([...props.overlays, obj]);
                                  }
                                } catch(e) {
                                  alert(e);
                                }
                              }}>
                                {
                                  context.isAdded(obj.myId, "overlays") ? "В корзине" : "Добавить в корзину"
                                }
                              </Button>
                            </div>
                        </Card.Body>
                      </Card> 
                    </div>
                  ))
                }
            </div>
          ) : (
            <h1>В избранном пусто</h1>
          )
        }
    </motion.div>
  )
}

export default Favorite