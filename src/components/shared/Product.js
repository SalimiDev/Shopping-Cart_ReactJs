import React from 'react';
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
                        <a href=''>Detail</a>
                        <div>
                              <button>Add to cart</button>
                        </div>
                  </div>
            </div>
      );
};

export default Product;
