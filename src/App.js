import { Route, Routes, Navigate } from 'react-router-dom';
//Compnents
import NavBar from './components/shared/NavBar';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import ShopCart from './components/ShopCart';
//Context
import CartContextProvider from './context/CartContextProvider';
import ProductContextProvider from './context/ProductContextProvider';

function App() {
      return (
            <ProductContextProvider>
                  <CartContextProvider>
                        <NavBar />
                        <Routes>
                              <Route path='/products' element={<Store />} />
                              <Route path='/products/:id' element={<ProductDetails />} />
                              <Route path='/*' element={<Navigate to='/products' />} />
                              <Route path='/cart' element={<ShopCart />} />
                        </Routes>
                  </CartContextProvider>
            </ProductContextProvider>
      );
}

export default App;
