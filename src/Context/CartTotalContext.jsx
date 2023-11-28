import { createContext, useContext, useEffect, useState } from "react";

const TotalPriceContext = createContext();

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
 
  const setTotalFilter = (brand) => {
    setTotalPrice(brand);
  };

  return (
    <TotalPriceContext.Provider value={{ totalPrice, setTotalFilter }}>
      {children}
    </TotalPriceContext.Provider>
  );
};

export const usePriceFilter = () => {
  return useContext(TotalPriceContext);
};

