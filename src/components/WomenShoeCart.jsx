import React, { useContext } from 'react'
import { gender } from '../constants';
import { womenShopContext } from '../Context/WomenShopContext';


const WomenShoeCart = (props) => {
    const { rating,  BrandName, Price, imgURL, Color } = props.data;
    const { womenCartItems, addToWomenCart, removeFromWomenCart, updateWomenCartItemCount } = useContext(womenShopContext);

    const womenCartCount = (e) => {
        updateWomenCartItemCount(Number(e.target.value), rating)
    }
    

  return (
    <section className=" w-[100%] h-[17rem] gap-3 max-sm:gap-0 lg:pb-4">
        <div className="h-full p-[1rem] flex max-sm:flex-col justify-between shadow-lg">
        <div className="flex gap-4">
            <div className="h-[full] w-[15rem] max-sm:w-[9rem]">
        <img src={imgURL} alt='img' />
          </div>
        <div className="">
            <p className='font-semibold text-[1.5rem] pb-2 max-sm:text-[1rem]'> {BrandName} </p>
            {gender.map((index) => (
                <p key={index.women} className='text-[1.4rem] text-coral-red max-sm:text-[1rem] font-semibold'>{index.women}</p>
            ))}
            <p className='text-[1.4em] text-coral-red font-semibold pb-6 max-sm:text-[1rem]'>{Color} Color</p>
            {/* <input value={cartItems[rating]} onChange={(e) => updateCartItemCount(Number(e.target.value), rating)}/> */}
            <div className="flex w-[8rem] justify-between">
            <button onClick={() => removeFromWomenCart(rating)} className='rounded-[50%] p-3 shadow-inner bg-[#e9e6e3] '> - </button>
             <p className='text-center flex flex-col justify-center items-center'>{womenCartItems[rating]}</p>
            <button onClick={() => addToWomenCart(rating)} className='rounded-[50%] p-3 shadow-inner bg-[#e9e6e3]'> + </button>
            </div>
            </div>
        </div>
        <div className="flex flex-col justify-normal items-end max-sm:items-center">
            <p className='font-semibold text-[1.5rem] max-sm:text-[1.11rem]'>£{Price * womenCartItems[rating]}</p>
            </div>
        </div>
    </section>
  )
}

export default WomenShoeCart