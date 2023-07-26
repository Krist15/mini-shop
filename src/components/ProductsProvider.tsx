import { createContext, useState } from 'react';

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initialState: ProductType[] = [
  {
    sku: 'item0001',
    name: 'Smartphone',
    price: 999.99,
  },
  {
    sku: 'item0002',
    name: 'Smart Watch',
    price: 1124.99,
  },
  {
    sku: 'item0003',
    name: 'Laptop',
    price: 1500,
  },
];

export type UseProductsContextType = { products: ProductType[] };

const initialContextState: UseProductsContextType = { products: [] };

const ProductsContext =
  createContext<UseProductsContextType>(initialContextState);

type ChildrenType = { children?: React.ReactNode };

export const ProductsProvider = ({ children }: ChildrenType) => {
  const [products, setProducts] = useState<ProductType[]>(initialState);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
