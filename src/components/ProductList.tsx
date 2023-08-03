import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import { ReactElement } from 'react';
import Product from './Product';

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.id === product.id);

      return (
        <Product
          key={product.id}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  return (
    <main className="flex flex-wrap gap-10 justify-between">{pageContent}</main>
  );
};

export default ProductList;
