import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Style
import styles from './Product.module.css';
// Functions
import { shorten, existInCart, quantityCount } from '../../helpers/functions';
// Context
import { CartContext } from '../../context/CartContextProvider';
// Icons
import trashIcon from '../../assets/icons/trash.svg';
const Product = ({ productData }) => {
      //Context states
      const { state, dispatch } = useContext(CartContext);
      const { id, image, title, price } = productData;
      return (
            <div className={styles.container}>
                  <img className={styles.cardImage} src={image} alt='product' style={{ width: '200px' }} />
                  <h3>{shorten(title)}</h3>
                  <p>{price}</p>
                  <div className={styles.linkContainer}>
                        <Link to={`/products/${id}`}>Details</Link>
                        <div className={styles.buttonContainer}>
                              {quantityCount(state, id) > 1 && (
                                    <button  className={styles.smallButton} onClick={() => dispatch({ type: 'DECREASE', payload: productData })}> - </button>
                              )}
                              {quantityCount(state, id) === 1 && (
                                    <button className={styles.smallButton} onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: productData })}>
                                          <img src={trashIcon} alt='trash' style={{ width: '20px' }} />
                                    </button>
                              )}
                              {quantityCount(state, productData.id) > 0 && ( <span className={styles.counter}>{quantityCount(state, productData.id)}</span> )}
                              {existInCart(state, id) ? (<button className={styles.smallButton}onClick={() => dispatch({ type: 'INCREASE', payload: productData })}>+ </button>
                              ) : (
                              <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: productData })}>Add to Cart</button>
                              )}
                        </div>
                  </div>
            </div>
      );
};

export default Product;
