// Result.js
import React, { useEffect, useState } from "react";
import { listOfWomenShoes } from "../constants";
import { useWomenFilter } from "./ContextApi.JSX";

const WomenResult = () => {
  const { womenFilterBrand } = useWomenFilter();
  const [filteredItemCount, setFilteredItemCount] = useState(0);

  useEffect(() => {
    const filteredData = listOfWomenShoes.filter(
      (shoe) =>
        womenFilterBrand === "" || shoe.BrandName.toLowerCase().includes(womenFilterBrand.toLowerCase())
    );
    setFilteredItemCount(filteredData.length);
  }, [listOfWomenShoes, womenFilterBrand]);

  return (
    <div className="flex justify-between font-montserrat leading-normal max-container">
      <h3>{filteredItemCount} Results</h3>
      <h3>VIEWS</h3>
    </div>
  );
};

export default WomenResult;
