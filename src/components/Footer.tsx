import useCart from '../hooks/useCart';

type PropType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  return (
    <footer className="footer">
      {viewCart ? (
        <p>Shopping cart &copy; {year} </p>
      ) : (
        <>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
          <p>Shopping cart &copy; {year}</p>
        </>
      )}
    </footer>
  );
};

export default Footer;
