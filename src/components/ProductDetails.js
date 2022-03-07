import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Style
import styles from "./ProductDetails.module.css";
//Context
import { ProductContext } from '../context/ProductContextProvider';

const ProductDetails = () => {
      const products = useContext(ProductContext);
      const { id } = useParams();
      const product = products[id-1];
    //   Destructure object
    const {title,image,description,price,category}=product || {};

      return (
            <div className={styles.container}>
                  <img className={styles.image} src={image} alt='product' />
                  <div className={styles.textContainer}>
                        <h3>{title}</h3>
                        <p className={styles.description}>{description}</p>
                        <p className={styles.category}><span>Category:</span> {category}  </p>
                        <div className={styles.buttonContainer}>
                              <span  className={styles.price}>{price} $</span>
                               <Link to="/products">Back to Shop</Link>
                        </div>
                  </div>
            </div>
      );
};

export default ProductDetails;
