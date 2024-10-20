import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { assets } from '../../assets/assets';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState(100);
  const [showRange, setShowRange] = useState(false);

  const onChangeHandler = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const onPriceChange = (event) => {
    setPriceFilter(Number(event.target.value));
  };

  const toggleFilter = () => {
    setShowRange(!showRange);
  };

  const filteredFoodList = food_list.filter(item =>
    item.name.toLowerCase().includes(searchQuery) &&
    item.price <= priceFilter
  );

  return (
    <div className='food-display' id='food-display'>
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={searchQuery}
            onChange={onChangeHandler}
          />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="price-filter">
          <button className="price-filter-btn" onClick={toggleFilter}>
            {showRange ? 'X' : 'Price'}
          </button>
          {showRange && (
            <div className="price-range-container">
              <label htmlFor="price">Max Price: ${priceFilter}</label>
              <input
                type="range"
                id="price"
                min="0"
                max="100"
                value={priceFilter}
                onChange={onPriceChange}
              />
            </div>
          )}
        </div>
      </div>
      <div className="food-display-content">
        <div className="food-list-heading">Discover Our Dishes</div>
        <div className="food-list-count">
          <span>{filteredFoodList.length}</span> items found
        </div>        
        <div className="food-display-list">
          {filteredFoodList.length > 0 ? (
            filteredFoodList.map((item, index) => {
              if (category === 'All' || category === item.category) {
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />;
              }
            })
          ) :
            <div className="no-items-wrapper">
              <img className='no-items' src={assets.no_found} alt="No items found" />
              <p>No results could be found. Please try again with a different query.</p>
            </div>
          }
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FoodDisplay;
