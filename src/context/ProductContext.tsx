import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { ProductType } from './Product.type';

interface ProductContextType {
  loading: boolean;
  error: Error | null;
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<Error | null>(null);

  return (
    <ProductContext.Provider
      value={{
        loading,
        error,
        products,
        setProducts,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error('useProduct must be used within a ProductProvider');
  return context;
};
