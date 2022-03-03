//Compnents
import Store from './components/Store';
//Context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
      return (
            <ProductContextProvider>
                  <Store />
            </ProductContextProvider>
      );
}

export default App;
