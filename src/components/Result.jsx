// Result.js
import React, { useEffect, useState } from "react";
import { listOfMenShoes } from "../constants";
import { useFilter } from "./ContextApi.JSX";

const Result = () => {
  const { filterBrand } = useFilter();
  const [filteredItemCount, setFilteredItemCount] = useState(0);

  useEffect(() => {
    const filteredData = listOfMenShoes.filter(
      (shoe) =>
        filterBrand === "" || shoe.BrandName.toLowerCase().includes(filterBrand.toLowerCase())
    );
    setFilteredItemCount(filteredData.length);
  }, [listOfMenShoes, filterBrand]);

  return (
    <div className="flex justify-between font-montserrat leading-normal max-container">
      <h3>{filteredItemCount} Results</h3>
      <h3>VIEWS</h3>
    </div>
  );
};

export default Result;
