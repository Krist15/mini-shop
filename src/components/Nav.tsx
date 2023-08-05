import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.svg';
import homeIcon from '../assets/home.svg';
import useCart from '../hooks/useCart';

type PropType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Nav({ viewCart, setViewCart }: PropType) {
  const { totalItems } = useCart();
  console.log(totalItems);

  return (
    <div>
      {viewCart ? (
        <Link
          onClick={() => setViewCart(false)}
          to="/products"
        >
          <img
            src={homeIcon}
            alt="Home Icon"
            className="h-12 w-14 p-2 hover:scale-105 transition ease-in-out relative"
          />
        </Link>
      ) : (
        <Link
          onClick={() => setViewCart(true)}
          to="/cart"
          className="relative h-12 w-14 p-2 hover:scale-105 transition ease-in-out"
        >
          <img
            src={cartIcon}
            alt="Cart Icon"
            className="h-12 w-14 p-2 hover:scale-105 transition ease-in-out"
          />
          <span className="absolute flex items-center justify-center left-10 top-5 w-6 h-6 rounded-full bg-black text-white">
            {totalItems}
          </span>
        </Link>
      )}
    </div>
  );
}
