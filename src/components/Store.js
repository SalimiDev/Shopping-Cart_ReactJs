import React, { useContext } from 'react';
//Components
import Product from './shared/Product';
//Context
import { ProductContext } from '../context/ProductContextProvider';
const Store = () => {
      const products = useContext(ProductContext);
      return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  {products.map((product) => (
                        <Product key={product.id} productData={product} />
                  ))}
            </div>
      );
};

export default Store;
