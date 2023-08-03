import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import Product from './Product';
import Spinner from './Spinner';

export default function ProductList() {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  if (products.length === 0) return <Spinner />;

  return (
    <main className="flex flex-wrap gap-10 justify-between">
      {products?.length &&
        products.map((product) => {
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
        })}
    </main>
  );
}
