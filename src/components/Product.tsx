import { ProductType } from '../context/ProductsProvider';
import { ReducerActionType, ReducerAction } from '../context/CartProvider';

type PropType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

export default function Product({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropType) {
  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart && ' 🛒 ';

  return (
    <article className="w-72 h-72">
      <h3 className="break-all">{product.category}</h3>
      <img
        src={product.image}
        alt={product.title}
        className="w-50 h-40"
      />
      <p>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(product.price)}
        {itemInCart}
        <button
          onClick={onAddToCart}
          className="p-1 rounded border-[1px] border-black hover:bg-gray-100"
        >
          Add to Cart
        </button>
      </p>
    </article>
  );
}
