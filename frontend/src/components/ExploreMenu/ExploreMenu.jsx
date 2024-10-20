import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Take a look at our menu and discover a variety of delicious dishes. Whether you want a light snack or a full meal, we have something for everyone. Enjoy the flavors that make every bite special.</p>
        <div className="explore-menu-list">
            {menu_list.map( (item,index) => {
                return (
                    <div onClick={() => setCategory(prev => prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="{item.menu_name}" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu