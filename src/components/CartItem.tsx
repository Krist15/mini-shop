import { CartItemType, ReducerAction } from '../context/CartProvider';
import { ReducerActionType } from '../context/CartProvider';

type PropType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

export default function CartItem({
  item,
  dispatch,
  REDUCER_ACTIONS,
}: PropType) {
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
    <li className="w-60 h-60">
      <img
        src={item.image}
        alt={item.title}
        className="cart__img"
      />
      <div>{item.title}</div>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(item.price)}

      <label
        htmlFor="itemQty"
        className=""
      >
        Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className=""
        value={item.qty}
        onChange={onChangeQty}
      >
        {options}
      </select>
      <div className="">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(lineTotal)}
      </div>
      <button
        onClick={removeForCart}
        className="px-2 border-2 border-red-500 rounded-md"
      >
        ❌
      </button>
    </li>
  );
}
