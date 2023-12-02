import React, { useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
import { womenShopContext } from '../Context/WomenShopContext';
import { useItemFilter } from '../Context/ItemsTotalContext';

const TotalCartNumber = () => {
    const { setItemFilter } = useItemFilter();
     const { cartItems } = useContext(shopContext);
  const { womenCartItems } = useContext(womenShopContext);

    const getTotalItems = () => {
  let total = 0;

  // Iterate over cartItems
  for (const key in cartItems) {
    if (cartItems.hasOwnProperty(key)) {
      total += cartItems[key];
    }
  }

  // Iterate over womenCartItems
  for (const key in womenCartItems) {
    if (womenCartItems.hasOwnProperty(key)) {
      total += womenCartItems[key];
    }
  }

  return total;
};

 
//  React.useEffect(() => {
//     setTotalFilter(totalItems);
//   }, [totalItems]);


const totalItems = getTotalItems();
React.useEffect(() => {
    setItemFilter(totalItems);
  }, [totalItems]);


};

export default TotalCartNumber;