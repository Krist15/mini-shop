import cartIcon from '../assets/cart.svg';
import homeIcon from '../assets/home.svg';
import useCart from '../hooks/useCart';

type PropType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Nav({ viewCart, setViewCart }: PropType) {
  const { totalItems } = useCart();

  return (
    <div>
      {viewCart ? (
        <button onClick={() => setViewCart(false)}>
          <img
            src={homeIcon}
            alt="home icon"
            className="h-12 w-14 p-2 hover:scale-105 transition ease-in-out relative"
          />
        </button>
      ) : (
        <button
          onClick={() => setViewCart(true)}
          className="h-12 w-14 p-2 hover:scale-105 transition ease-in-out relative animate-shake"
        >
          <img
            src={cartIcon}
            alt=""
          />
          <span className="absolute flex items-center justify-center -top-3 right-1 w-6 h-6 rounded-full bg-black text-white">
            {totalItems}
          </span>
        </button>
      )}
    </div>
  );
}
