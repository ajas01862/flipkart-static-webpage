// import React from 'react';
// import PropTypes from 'prop-types';
import './Navbar.css';

function Navbar() {
  return(
    <div>
    <nav className="Navbar">
      <img className='logo' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
      <ul>
        <li><input type="search" className='input-computer' placeholder='Search for products, Brands and More' size='20'/></li>
        <li><button><img className='btn-img' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" />Login</button></li>
        <li><button><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" />Cart</button></li>
        <li><button><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" />Become A Seller</button></li>
        <li><button className='btn-more'><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" /></button></li>
      </ul>
    </nav>
    <input type="search" className='input-mobile' placeholder='Search for Products...' size='80vw'/>
  </div>
  )
  
}

// Navbar.propTypes = {};

// Navbar.defaultProps = {};

export default Navbar;
