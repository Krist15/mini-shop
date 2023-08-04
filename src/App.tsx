import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useState } from 'react';

export default function App() {
  const [viewCart, setViewCart] = useState(false);

  return (
    <div>
      <Header
        viewCart={viewCart}
        setViewCart={setViewCart}
      />
      {viewCart ? <Cart /> : <ProductList />}
    </div>
  );
}
