import React, { useState } from 'react'
import Button from '../Button';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { usePriceFilter } from '../../Context/CartTotalContext';
import { useNavigate } from 'react-router-dom';


const CartReturn = () => {
    const [isRotated, setRotated] = useState(false);
    const [couponBtn, setCouponBtn] = useState(true);
    const { totalPrice } = usePriceFilter();


    const handleClick = () => {
    setRotated(!isRotated);
  };
    const navigate = useNavigate()
  return (
    <section className=" h-full max-sm:mt-4">
            <div className="flex flex-col justify-center items-center shadow-md py-3">
            <h2 className='text-center font-semibold text-[1.2rem] max-sm:text-[1rem] text-coral-red font-palanquin'>YOU’VE EARNED FREE SHIPPING</h2>
            </div>
            <div className="flex flex-col justify-center items-center shadow-md py-3">
            <h2 className='text-center font-semibold text-[1rem] max-sm:text-[0.9rem] text-[#72706e] font-palanquin'>FREE RETURNS ON ALL QUALIFYING ORDERS.</h2>
            </div>
            <div className="">
                <div className="my-4 py-4 px-3 bg-slate-50 flex justify-between">
                <h2 className='text-black text-[1.4rem] max-sm:text-[1.2rem] font-palanquin'>APPLY A PROMO CODE</h2>
                <button
        onClick={handleClick}
        className="transition-transform transform px-6 pl-16 outline-none">
        {/* You can use any arrow icon library or your custom arrow component here */}
        {isRotated ? <FaArrowDown /> : <FaArrowUp />}
      </button>
                </div>
                { isRotated ? <div className="w-full h-[2rem] flex justify-between">
      <div className="w-2/3 h-full">
        <input type='text' placeholder="Enter a promo code"  className='w-full h-full px-2 border-black border-2 py-7 text-lg focus:ring-2 focus:ring-slate-50'/>
      </div>
      <div className="">
        <Button label="APPLY" couponBtn = {couponBtn} />
      </div>
                </div> : ''} 
            </div>
            <div className="border-y-2 mt-9">
            <div className="flex justify-between px-4 mt-9 font-montserrat">
                <h2 className='font-semibold text-lg max-sm:text-[1rem] text-[#72706e]'>SUBTOTAL </h2>
                <h2 className='font-semibold text-lg text-[#72706e] max-sm:text-[1rem]'>£{totalPrice}.00</h2>
            </div>
            <div className="flex justify-between px-4 mt-3 font-montserrat mb-6">
                <h2 className='font-semibold text-lg text-[#72706e] max-sm:text-[1rem]'>SHIPPING COSTS </h2>
                <h2 className='font-semibold text-lg text-[#72706e] max-sm:text-[1rem]'>£0.00</h2>
            </div>
            </div>
            <div className="flex justify-between px-4 mt-3 py-9 shadow-lg">
                <h2 className='font-semibold font-palanquin text-[1.5rem] max-sm:text-[1.4rem]'>TOTAL <span className='font-semibold text-lg text-[#72706e] max-sm:text-[1rem]'>INCL. VAT</span> </h2>
                <h2 className='font-semibold font-palanquin text-[1.5rem] text-coral-red'>£{totalPrice}.00</h2>
            </div>
            <div className="w-full py-6 text-center bg-coral-red pt-6">
            <p className='font-bold text-[1.4rem] font-palanquin'> CHECKOUT </p>
            </div>
            <div className="flex justify-end pt-4 font-palanquin">
            <button onClick={() => navigate(-1)} className='bg-slate-200 px-7 py-4 outline-none text-[1.3rem]'> continue shopping </button>
            </div>
        </section> 
  )
}

export default CartReturn