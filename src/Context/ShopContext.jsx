import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { listOfMenShoes } from '../constants';

export const shopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (const shoe of listOfMenShoes) {
    cart[shoe.rating] = 0;
  }
  return cart;
};


export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItemsJSON = localStorage.getItem('cart');
    try {
      const storedCartItems = JSON.parse(storedCartItemsJSON);
      if (storedCartItems) {
        return storedCartItems;
      }
    } catch (error) {
      console.error('Error parsing cart items from local storage:', error);
    }
    return getDefaultCart();
  });

  // useEffect to store cartItems in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = listOfMenShoes.find((shoe) => shoe.rating === Number(item));
        itemInfo ? (totalAmount += cartItems[item] * itemInfo.Price) : '';
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = prev[itemId] + 1;
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = prev[itemId] - 1;
      return updatedCart;
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>;
};


