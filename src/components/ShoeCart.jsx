import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext';

const ShoeCart = (props) => {
    const { rating,  BrandName, Price, imgURL, Color } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(shopContext);

    const cartCount = (e) => {
        updateCartItemCount(Number(e.target.value), rating)
    }
    

  return (
    <section className="">
        
        <img src={imgURL} alt='img' />
        <div className="">
            <div className="">
                {BrandName}
            </div>
            <p>£{Price}</p>
            <p>{Color} Color</p>
            <div className="">
                <button onClick={() => removeFromCart(rating)}> - </button>
                <input value={cartItems[rating]} onChange={(e) => updateCartItemCount(Number(e.target.value), rating)}/>
                <button onClick={() => addToCart(rating)}> + </button>
            </div>
        </div>
    </section>
  )
}

export default ShoeCart