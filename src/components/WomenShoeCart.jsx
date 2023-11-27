import React, { useContext } from 'react'
import { womenShopContext } from '../Context/WomenShopContext';

const WomenShoeCart = (props
    
    
    ) => {
    const { rating,  BrandName, Price, imgURL, Color } = props.data;
    const { womenCartItems, addToWomenCart, removeFromWomenCart, updateWomenCartItemCount } = useContext(womenShopContext);

    const womenCartCount = (e) => {
        updateWomenCartItemCount(Number(e.target.value), rating)
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
                <button onClick={() => removeFromWomenCart(rating)}> - </button>
                <input value={womenCartItems[rating]} onChange={(e) => updateWomenCartItemCount(Number(e.target.value), rating)}/>
                <button onClick={() => addToWomenCart(rating)}> + </button>
            </div>
        </div>
    </section>
  )
}

export default WomenShoeCart