import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Style
import styles from './Navbar.module.css';
//Icons
import shopIcon from '../../assets/icons/shop.svg';
//Context
import { CartContext } from '../../context/CartContextProvider';
const NavBar = () => {
      //CartContext States
      const { state } = useContext(CartContext);
      return (
            <div className={styles.mainContainer}>
                  <div className={styles.container}>
                        <Link className={styles.productLink} to='/products'>
                              Products
                        </Link>
                        <div className={styles.iconContainer}>
                              <Link to='/cart'>
                                    <img src={shopIcon} alt='shop' />
                              </Link>
                              <span>{state.itemsCounter}</span>
                        </div>
                  </div>
            </div>
      );
};

export default NavBar;
