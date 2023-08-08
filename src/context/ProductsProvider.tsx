import { createContext, useState, useEffect } from 'react';

export type ProductType = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export type Rating = {
  rate: string;
  count: number;
};

const initialState: ProductType[] = [];

export type UseProductsContextType = { products: ProductType[] };

const initialContextState: UseProductsContextType = { products: initialState };

const ProductsContext =
  createContext<UseProductsContextType>(initialContextState);

type ChildrenType = { children?: React.ReactNode };

export const ProductsProvider = ({ children }: ChildrenType) => {
  const [products, setProducts] = useState<ProductType[]>(initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = (await response.json()) as ProductType[];
        const filteredData = data.filter(
          (product) =>
            product.category !== 'jewelery' &&
            product.category !== 'electronics'
        );
        setProducts(filteredData);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
