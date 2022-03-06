import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

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
            <div>
                  <img src={image} alt='product' style={{ width: '200px' }} />
                  <h3>{shorten(title)}</h3>
                  <p>{price}</p>
                  <div>
                        <Link to={`/products/${id}`}>Details</Link>
                        <div>
                              {quantityCount(state, id) > 1 && (
                                    <button onClick={() => dispatch({ type: 'DECREASE', payload: productData })}>-</button>
                              )}
                              {quantityCount(state, id) === 1 && (
                                    <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: productData })}>
                                          <img src={trashIcon} alt='trash' style={{ width: '20px' }} />
                                    </button>
                              )}
                              {existInCart(state, id) ? (
                                    <button onClick={() => dispatch({ type: 'INCREASE', payload: productData })}>+</button>
                              ) : (
                                    <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: productData })}>Add to Cart</button>
                              )}
                        </div>
                  </div>
            </div>
      );
};

export default Product;
