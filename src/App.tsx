import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Home from './components/Home';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';

export default function App() {
  const [viewCart, setViewCart] = useState(false);

  return (
    <div className="bg-[#F5F5F5] h-full">
      <Header
        viewCart={viewCart}
        setViewCart={setViewCart}
      />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/products"
          element={<ProductList />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </div>
  );
}
