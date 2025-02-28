import { createContext, ReactElement, useEffect, useState } from 'react';

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

export type UseProductsContextType = { products: ProductType[] };

type ChildrenType = { children?: ReactElement | ReactElement[] };

const initState: ProductType[] = [];

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:3500/products');
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data);
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
