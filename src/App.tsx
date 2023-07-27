import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { useState } from 'react';

const App = () => {
  const [viewCart, setViewCart] = useState(false);

  return (
    <>
      <Header
        viewCart={viewCart}
        setViewCart={setViewCart}
      />
      {viewCart ? <Cart /> : <ProductList />}
      <Footer viewCart={viewCart} />
    </>
  );
};

export default App;
