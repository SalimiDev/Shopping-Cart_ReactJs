import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//Context
import { ProductContext } from '../context/ProductContextProvider';

const ProductDetails = () => {
      const products = useContext(ProductContext);
      const { id } = useParams();
      const product = products[id-1];
    //   Destructure object
    const {title,image,description,price,category}=product || {};

      return (
            <div>
                  <img src={image} alt='product' style={{ width: '200px' }} />
                  <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p><span>Category:</span> {category}</p>
                        <div>
                            <span>{price} $</span>
                            <Link to='/products '>Back</Link>
                        </div>
                  </div>
            </div>
      );
};

export default ProductDetails;
