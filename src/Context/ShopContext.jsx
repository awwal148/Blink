import React, { useState } from 'react'
import { createContext } from 'react'
import { listOfMenShoes } from '../constants';

export const shopContext = createContext(null)

// const getDefaultCart = () => {
//     let cart = {};
//     for (let i = 1; i < listOfMenShoes.length + 1; i++) {
//         cart[i] = 0;
//     }
//      console.log('Default Cart:', cart);
//     return cart;
// }

const getDefaultCart = () => {
  let cart = {};
  for (const shoe of listOfMenShoes) {
    cart[shoe.rating] = 0;
  }
  console.log('Default Cart:', cart);
  return cart;
};


 export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] =  useState(getDefaultCart());

    // useEffect to store cartItems in local storage whenever it changes
    React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

   // useEffect to retrieve cartItems from local storage when the component mounts
    React.useEffect(() => {
        console.log('Retrieving from Local Storage');
    const storedCartItemsJSON = localStorage.getItem('cart');

    try {
      const storedCartItems = JSON.parse(storedCartItemsJSON);
       console.log('Retrieved from Local Storage:', storedCartItems);
      if (storedCartItems) {
        setCartItems(storedCartItems);
      }
    } catch (error) {
      console.error('Error parsing cart items from local storage:', error);
    }
  }, []);

//     // Convert cartItems to a JSON string
//     const cartItemsJSON = JSON.stringify(cartItems);

//     // Store the JSON string in local storage with a key, for example, "cart"
//     localStorage.setItem('cart', cartItemsJSON);
//     // Storing cart items
// localStorage.setItem('cart', JSON.stringify(cartItems));

// // Retrieving cart items
// const storedCartItemsJSON = localStorage.getItem('cart');
// const storedCartItems = JSON.parse(storedCartItemsJSON);


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = listOfMenShoes.find((shoe) => shoe.rating === Number(item));
                itemInfo ? totalAmount += cartItems[item] * itemInfo.Price : ""
            }
        }
        return totalAmount
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount };


  return <shopContext.Provider value={contextValue}> {props.children}  </shopContext.Provider>
}
