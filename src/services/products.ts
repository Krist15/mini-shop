import { ProductType } from '../context/ProductsProvider';

const getProducts = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = <Promise<ProductType[]>>res.json();

    return (await data).filter(
      (product) =>
        product.category !== 'jewelery' && product.category !== 'electronics'
    );
  } catch (error) {
    console.log(error);
  }
};

export default { getProducts };
