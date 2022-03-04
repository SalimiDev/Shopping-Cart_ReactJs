import { Route, Routes, Navigate } from 'react-router-dom';
//Compnents
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
//Context
import CartContextProvider from './context/CartContextProvider';
import ProductContextProvider from './context/ProductContextProvider';

function App() {
      return (
            <ProductContextProvider>
                  <CartContextProvider>
                        <Routes>
                              <Route path='/products' element={<Store />} />
                              <Route path='/products/:id' element={<ProductDetails />} />
                              <Route path='/*' element={<Navigate to='/products' />} />
                        </Routes>
                  </CartContextProvider>
            </ProductContextProvider>
      );
}

export default App;
