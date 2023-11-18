import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();
const WomenFilterContext = createContext();

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

//women
export const WomenFilterProvider = ({ children }) => {
  const [womenFilterBrand, setWomenFilterBrand] = useState("");

  const setWomenBrandFilter = (brand) => {
    setWomenFilterBrand(brand);
  };

  return (
    <WomenFilterContext.Provider value={{ womenFilterBrand, setWomenBrandFilter }}>
      {children}
    </WomenFilterContext.Provider>
  );
};

export const useWomenFilter = () => {
  return useContext(WomenFilterContext);
};