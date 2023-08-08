import { createContext, useState, useEffect } from 'react';
import productService from '../services/products';

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
    productService
      .getProducts()
      .then((res) => setProducts(res as ProductType[]));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
