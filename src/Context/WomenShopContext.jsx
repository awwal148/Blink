import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { listOfWomenShoes } from '../constants';

export const womenShopContext = createContext(null);

const getWomenDefaultCart = () => {
  let cart = {};
  for (const shoe of listOfWomenShoes) {
    cart[shoe.rating] = 0;
  }
  return cart;
};


export const ShopWomenContextProvider = (props) => {
  const [womenCartItems, setWomenCartItems] = useState(() => {
    const storedWomenCartItemsJSON = localStorage.getItem('cart');
    try {
      const storedWomenCartItems = JSON.parse(storedWomenCartItemsJSON);
      if (storedWomenCartItems) {
        return storedWomenCartItems;
      }
    } catch (error) {
      console.error('Error parsing cart items from local storage:', error);
    }
    return getWomenDefaultCart();
  });

  // useEffect to store cartItems in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(womenCartItems));
  }, [womenCartItems]);

  const getWomenTotalCartAmount = () => {
    let womenTotalAmount = 0;
    for (const item in womenCartItems) {
      if (womenCartItems[item] > 0) {
        let itemInfo = listOfWomenShoes.find((shoe) => shoe.rating === Number(item));
        itemInfo ? (womenTotalAmount += womenCartItems[item] * itemInfo.Price) : '';
      }
    }
    console.log('Total Women Amount:', womenTotalAmount);
    return womenTotalAmount;
  };

  const addToWomenCart = (itemId) => {
    setWomenCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = prev[itemId] + 1;
      return updatedCart;
    });
  };

  const removeFromWomenCart = (itemId) => {
    setWomenCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = prev[itemId] - 1;
      return updatedCart;
    });
  };

  const updateWomenCartItemCount = (newAmount, itemId) => {
    setWomenCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    womenCartItems,
    addToWomenCart,
    removeFromWomenCart,
    updateWomenCartItemCount,
    getWomenTotalCartAmount,
  };

  return <womenShopContext.Provider value={contextValue}>{props.children}</womenShopContext.Provider>;
};
