import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const location = useLocation();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("")
    navigate("/")
  }
  
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
      {location.pathname === '/cart' || location.pathname === '/order' 
        ?
        <></>
        :
        <ul className="navbar-menu">
          <Link to='/' onClick={() => setMenu("home")} className={menu == "home" ? "active" : ""}>home</Link>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu == "menu" ? "active" : ""}>menu</a>
          <a href='#testimonial' onClick={() => setMenu("testimonial")} className={menu == "testimonial" ? "active" : ""}>feedbacks</a>
          <a href='#footer' onClick={() => setMenu("contact-us")} className={menu == "contact-us" ? "active" : ""}>contact us</a>
        </ul>
       }
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          {
            getTotalCartAmount() > 0 ? <div className="dot"></div> : <></>
          }
        </div>
        {!token?<button onClick={() => setShowLogin(true)}>sign in </button>
          : <div className='nav-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
            </div> }
      </div>

    </div>
  )
}

export default Navbar