import React, { useContext } from 'react';
// Style
import styles from "./Cart.module.css";
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
            <div className={styles.container} >
            <img className={styles.productImage} src={image} alt='product' />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: data})} >-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})} ><img src={trashIcon} alt="trash" /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: data})} >+</button>
            </div>
        </div>
      );
};

export default Cart;
