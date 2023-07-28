import { CartItemType, ReducerAction } from '../context/CartProvider';
import { ReducerActionType } from '../context/CartProvider';

type PropType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropType) => {
  const img = new URL(`../images/${item.sku}.webp`, import.meta.url).href;

  const lineTotal = item.qty * item.price;

  const highestqQty = 20 > item.qty ? 20 : item.qty;

  const optionValues = [...Array(highestqQty).keys()].map((i) => i + 1);

  const options = optionValues.map((val) => {
    return (
      <option
        key={`opt${val}`}
        value={val}
      >
        {val}
      </option>
    );
  });

  const onChangeQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const removeForCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

  return (
    <li className="cart__item">
      <img
        src={img}
        alt={item.name}
        className="cart__img"
      />
      <div aria-label="Item Name">{item.name}</div>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(item.price)}

      <label
        htmlFor="itemQty"
        className="offscreen"
      >
        Item Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className="cart__select"
        value={item.qty}
        aria-label="Item Quantity"
        onChange={onChangeQty}
      >
        {options}
      </select>
      <div
        className="cart__item-subtotal"
        aria-label="Line Item Subtotal"
      >
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(lineTotal)}
      </div>
      <button
        aria-label="Remove Item From Cart"
        title="Remove Item For Cart"
        onClick={removeForCart}
        className="cart__button"
      >
        ❌
      </button>
    </li>
  );
};
export default CartLineItem;
