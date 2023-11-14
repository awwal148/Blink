import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterBrand, setFilterBrand] = useState("");

  const setBrandFilter = (brand) => {
    setFilterBrand(brand);
  };

  return (
    <FilterContext.Provider value={{ filterBrand, setBrandFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
