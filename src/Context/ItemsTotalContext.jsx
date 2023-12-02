import { createContext, useContext, useEffect, useState } from "react";

const TotalItemContext = createContext();

export const ItemTotalProvider = ({ children }) => {
  const [totalCount, setTotalCount] = useState(0);
 
  const setItemFilter = (brand) => {
    setTotalCount(brand);
  };

  return (
    <TotalItemContext.Provider value={{ totalCount, setItemFilter }}>
      {children}
    </TotalItemContext.Provider>
  );
};

export const useItemFilter = () => {
  return useContext(TotalItemContext);
};

