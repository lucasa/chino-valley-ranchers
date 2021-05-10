import { createContext, useContext } from 'react';

const ProductsContext = createContext();

export function ProductsWrapper({ children, products }) {
  let sharedState = products

  return (
    <ProductsContext.Provider value={sharedState}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  return useContext(ProductsContext);
}