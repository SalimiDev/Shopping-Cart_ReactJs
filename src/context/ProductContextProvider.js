import React, { createContext, useState, useEffect } from 'react';
//API
import { getProducts } from '../services/api';
//Context
export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
      //States
      const [products, setProducts] = useState([]);

      //Get and set Api data
      useEffect(() => {
            const fetchApi = async () => {
                  setProducts(await getProducts());
            };
            fetchApi();
      }, []);

      return (
            <div>
                  <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
            </div>
      );
};

export default ProductContextProvider;
