import React, { useContext } from 'react'
import { gender } from '../constants';
import { shopContext } from '../Context/ShopContext';

const ShoeCart = (props) => {
    const { rating,  BrandName, Price, imgURL, Color } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(shopContext);

    const cartCount = (e) => {
        updateCartItemCount(Number(e.target.value), rating)
    }
    

  return (
    <section className="flex w-full h-[17rem] gap-3  lg:pb-4">
        <div className="h-full p-[1rem] w-2/3 flex justify-between shadow-lg">
        <div className="flex gap-4">
            <div className="h-[full] w-[15rem]">
        <img src={imgURL} alt='img' />
          </div>
        <div className="">
            <p className='font-semibold text-[1.5rem] pb-2'> {BrandName} </p>
            {gender.map((index) => (
                <p key={index.men} className='text-[1.4rem] text-coral-red font-semibold'>{index.men}</p>
            ))}
            <p className='text-[1.4em] text-coral-red font-semibold pb-6'>{Color} Color</p>
            {/* <input value={cartItems[rating]} onChange={(e) => updateCartItemCount(Number(e.target.value), rating)}/> */}
            <div className="flex w-[8rem] justify-between">
            <button onClick={() => removeFromCart(rating)} className='rounded-[50%] p-3 shadow-inner bg-[#e9e6e3] '> - </button>
             <p className='text-center flex flex-col justify-center items-center'>{cartItems[rating]}</p>
            <button onClick={() => addToCart(rating)} className='rounded-[50%] p-3 shadow-inner bg-[#e9e6e3]'> + </button>
            </div>
            </div>
        </div>
        <div className="flex flex-col justify-normal items-end">
            <p className='font-semibold text-[1.5rem]'>£{Price}</p>
            </div>
        </div>
        <div className="w-1/3 h-full">
            <div className="flex flex-col justify-center items-center shadow-lg py-2">
            <h2 className='text-center font-semibold text-[1.2rem] text-coral-red'>YOU’VE EARNED FREE SHIPPING</h2>
            </div>
            <div className="flex flex-col justify-center items-center shadow-lg py-2">
            <h2 className='text-center font-semibold text-[1rem] text-[#c5c2c0]'>FREE RETURNS ON ALL QUALIFYING ORDERS.</h2>
            </div>
        </div>
    </section>
  )
}

export default ShoeCart