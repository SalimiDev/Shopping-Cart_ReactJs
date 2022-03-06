import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Icons
import shopIcon from '../../assets/icons/shop.svg';
//Context
import { CartContext } from '../../context/CartContextProvider';
const NavBar = () => {
      //CartContext States
      const { state } = useContext(CartContext);
      return (
            <div>
                  <div>
                        <Link to='/products'>Products</Link>
                        <div>
                              <Link to='/cart' >
                                    <img src={shopIcon} alt='shop' />
                              </Link>
                              <span>{state.itemsCounter}</span>
                        </div>
                  </div>
            </div>
      );
};

export default NavBar;
