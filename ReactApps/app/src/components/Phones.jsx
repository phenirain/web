import React, { useEffect, useState} from 'react'
import CartItem from './CartItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion';


const Phones = (props) => {
  const [selectedFrom, setSelectedFrom] = useState('all'); 
  const [selectedMark, setSelectedMark] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedModel, setSelectedModel] = useState('all');
  const [selectedFeature, setSelectedFeature] = useState('all');
  const [search, setSearch] = useState('');

  const handleFromChange = (event) => {
    setSelectedFrom(event.target.value);
    };
  
  const handelMarkChange = (event) => {
    setSelectedMark(event.target.value);
  };

  const handelPriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handelModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handelFeatureChange = (event) => {
    setSelectedFeature(event.target.value);
  };

  const onSearch = (inputValue) => {
    setSearch(inputValue.target.value);
  }
  
  // search by model
  // filter by from
  // filter  by mark
  const countries = [...new Set(props.item.map(x => x.from))];
  const marks = [...new Set(props.item.map(x => x.mark))];
  const models = [...new Set(props.item.map(x => x.model))];
  const features = [...new Set(props.item.map(x => x.feature))];
  const filteredItems = props.item.filter(item =>
    (selectedFrom === 'all' || item.from === selectedFrom) &&
    (selectedMark === 'all' || item.mark === selectedMark) &&
    (selectedModel === 'all' || item.model === selectedModel) &&
    (selectedFeature === 'all' || item.feature === selectedFeature) &&
    item.model.toLowerCase().includes(search.toLowerCase()) &&
    (selectedPrice === 'all' || 
        (selectedPrice === 'less' && item.price < 50000) ||
        (selectedPrice === 'more' && item.price >= 50000)
    ) 
    );

  if (selectedPrice === "less") {
    filteredItems.filter(item => item.price < 50000);
  } else if (selectedPrice === "more") {
    filteredItems.filter(item => item.price >= 50000);
  }

  return (
    <motion.div class="container mt-3"
    initial={{opacity: 0, y: -100}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.9}}
    >
      <h1>Телефоны: </h1>
      <div class="m-2">
        <input placeholder='Поиск по модели' onChange={onSearch}/>
        <div class="d-flex flex-wrap m-2 phone-con align-items-center">
          <div class="d-flex filter-gap">
            <p>Страна: </p>
            <select onChange={handleFromChange}>
              <option value="all">Все</option> 
              {
                countries.map(country => (
                  <option value={country}>{country}</option>
                ))
              }
            </select>
          </div>
          <div class="d-flex filter-gap">
            <p>Марка: </p>
            <select onChange={handelMarkChange}>
              <option value="all">Все</option> 
              {
                marks.map(mark => (
                  <option value={mark}>{mark}</option>
                ))
              }
            </select>
          </div>
          <div class="d-flex filter-gap">
            <p>Модель: </p>
            <select onChange={handelModelChange}>
              <option value="all">Все</option> 
              {
                models.map(model => (
                  <option value={model}>{model}</option>
                ))
              }
            </select> 
          </div>
          <div class="d-flex filter-gap">
            <p>Цена: </p>
            <select onChange={handelPriceChange}>
              <option value="all">Все</option> 
              <option value="less">Меньше 50000</option> 
              <option value="more">Больше 50000</option> 
            </select> 
          </div>
          <div class="d-flex filter-gap">
            <p>Фича: </p>
            <select onChange={handelFeatureChange}>
              <option value="all">Все</option> 
              {
                features.map(feature => (
                  <option value={feature}>{feature}</option>
                ))
              }
            </select>  
          </div>
        </div>
      </div>
      <CartItem
        item={filteredItems}
        overlays={props.overlays}
        setOverlays={props.setOverlays}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
      />
    </motion.div>
  )
}

export default Phones