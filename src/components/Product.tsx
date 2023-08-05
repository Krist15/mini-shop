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
    <article className="flex flex-col p-4 gap-5 items-center w-72 h-90 border-[1px] border-black rounded">
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 flex-1"
      />
      <h3 className="break-words text-justify">{product.title}</h3>
      <p>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(product.price)}
        {itemInCart}
      </p>
      <button
        onClick={onAddToCart}
        className="p-1 rounded border-[1px] border-black hover:bg-gray-100 "
      >
        Add to Cart
      </button>
    </article>
  );
}
