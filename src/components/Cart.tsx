import useCart from '../hooks/useCart';
import { useState } from 'react';
import CartItem from './CartItem';

export default function Cart() {
  const [confirm, setConfirm] = useState(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  if (!cart.length) return <div className="text-4xl">Empty Cart</div>;

  return (
    <main className="">
      {confirm ? (
        <h2>Thank you for your order.</h2>
      ) : (
        <>
          <h2 className="">Cart</h2>
          <ul className="flex flex-wrap">
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                />
              );
            })}
          </ul>
          <div className="">
            <p>Items: {totalItems}</p>
            <p>Price: {totalPrice}</p>
            <button
              className="border-2 border-black rounded-md p-2"
              disabled={!totalItems}
              onSubmit={onSubmitOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </main>
  );
}
