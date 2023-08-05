import { NavLink } from 'react-router-dom';
import Nav from './Nav';

type PropType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ viewCart, setViewCart }: PropType) {
  const content = (
    <header className="flex justify-between items-center w-full h-[5.3rem] px-4 bg-black/5 sticky top-0 backdrop-blur-md border-b-[0.5px] border-b-white saturate-150">
      <div className="header__title-bar">
        <h1 className="text-black text-4xl ">Mini shop</h1>
      </div>
      <div className="flex items-center justify-between w-1/2 h-1/2">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? ''
              : isActive
              ? 'text-lg border-b-2 border-black'
              : 'text-lg'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending
              ? ''
              : isActive
              ? 'text-lg border-b-2 border-black'
              : 'text-lg'
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? ''
              : isActive
              ? 'text-lg border-b-2 border-black'
              : 'text-lg'
          }
        >
          About
        </NavLink>
        <Nav
          viewCart={viewCart}
          setViewCart={setViewCart}
        />
      </div>
    </header>
  );

  return content;
}
