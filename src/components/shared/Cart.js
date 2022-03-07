import React, { useContext } from 'react';
//Function
import { shorten } from '../../helpers/functions';
//Icons
import trashIcon from '../../assets/icons/trash.svg';
//Context
import { CartContext } from '../../context/CartContextProvider';
const Cart = ({ data }) => {
      const { dispatch } = useContext(CartContext);
      const { title, image, price, quantity } = data;
      console.log(quantity);
      return (
            <div>
                  <div>
                        <img src={image} alt='product' />
                        <div>
                              <h3>{shorten(title)}</h3>
                              <p>{price} $</p>
                        </div>
                        <div>
                              <span>{quantity}</span>
                        </div>
                        <div>
                              {quantity > 1 ? (
                                    <button onClick={() => dispatch({ type: 'DECREASE', payload: data })}>-</button>
                              ) : (
                                    <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: data })}>
                                          <img src={trashIcon} alt='trash' style={{ width: '20px' }} />
                                    </button>
                              )}
                              <button onClick={() => dispatch({ type: 'INCREASE', payload: data })}>+</button>
                        </div>
                  </div>
            </div>
      );
};

export default Cart;
