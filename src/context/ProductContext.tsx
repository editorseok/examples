import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

interface ProductContextType {
  productId: number;
  setProductId: React.Dispatch<React.SetStateAction<number>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [productId, setProductId] = useState<number>(0);

  return (
    <ProductContext.Provider
      value={{ productId: productId, setProductId: setProductId }}>
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
