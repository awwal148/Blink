import React, { useState } from 'react'
import { createContext } from 'react'
import { listOfMenShoes } from '../constants';

export const shopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < listOfMenShoes.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

 export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] =  useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount };


  return <shopContext.Provider value={contextValue}> {props.children}  </shopContext.Provider>
}
