import React, { useEffect, useState} from 'react'
import CartItem from './CartItem';
import 'bootstrap/dist/css/bootstrap.min.css';


const Phones = (props) => {

  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [search, setSearch] = useState('');
  const handleCategoryChange = (event) => {
     setSelectedCategory(event.target.value);
    };
  const onSearch = (inputValue) => {
    setSearch(inputValue.target.value);
  }
  // search by model
  // filter by from
  const filteredItems = props.item.filter(item => selectedCategory === 'all' || item.from === selectedCategory )
      .filter(item => item.model.toLowerCase().includes(search.toLowerCase()));

  return (
    <div class="container mt-3">
      <h1>Телефоны: </h1>
      <input class="m-2" placeholder='Поиск' onChange={onSearch}/>
      <select onChange={handleCategoryChange} class="mt-2">
        <option value="all">Все</option> 
        <option value="Russia">Россия</option>
        <option value="USA">США</option> 
      </select> 
      <CartItem
        item={filteredItems}
        overlays={props.overlays}
        setOverlays={props.setOverlays}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
      />
    </div>
  )
}

export default Phones