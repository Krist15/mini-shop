import { createContext, useState, useEffect } from 'react';

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initialState: ProductType[] = [];

// const initialState: ProductType[] = [
//   {
//     sku: 'item0001',
//     name: 'Smartphone',
//     price: 999.99,
//   },
//   {
//     sku: 'item0002',
//     name: 'Smart Watch',
//     price: 1124.99,
//   },
//   {
//     sku: 'item0003',
//     name: 'Laptop',
//     price: 1500,
//   },
// ];

export type UseProductsContextType = { products: ProductType[] };

const initialContextState: UseProductsContextType = { products: [] };

const ProductsContext =
  createContext<UseProductsContextType>(initialContextState);

type ChildrenType = { children?: React.ReactNode };

export const ProductsProvider = ({ children }: ChildrenType) => {
  const [products, setProducts] = useState<ProductType[]>(initialState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch('http://localhost:3500/products')
        .then((res) => res.json())
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });
      return data;
    };

    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
