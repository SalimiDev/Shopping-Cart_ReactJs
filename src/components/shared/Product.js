import React from 'react';
import { Link } from 'react-router-dom';
//functions
import { shorten } from '../../helpers/functions';
const Product = ({ productData }) => {
      const { id, title, image, price } = productData;
      return (
            <div>
                  <img src={image} alt='product' style={{ width: '200px' }} />
                  <h3>{shorten(title)}</h3>
                  <p>{price}</p>
                  <div>
                        <Link to={`/products/${id}`}>detail</Link>
                        <div>
                              <button>Add to cart</button>
                        </div>
                  </div>
            </div>
      );
};

export default Product;
