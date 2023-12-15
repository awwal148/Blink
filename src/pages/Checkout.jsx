import React, { useState } from 'react';
import { useContext } from 'react'
import { usePriceFilter } from '../Context/CartTotalContext';
import { shopContext } from '../Context/ShopContext'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { womenShopContext } from '../Context/WomenShopContext';
// import { useForm, useFieldArray, yupResolver } from 'react-hook-form';
import { Link } from 'react-router-dom';
import CardDetailsForm from '../CardDetails/CardDetails';
import ShippingInfo from '../CheckoutInfo/ShippingInfo';
import Payment from '../CheckoutInfo/Payment';
import { listOfMenShoes, listOfWomenShoes } from '../constants';
import ShoeCart from '../components/ShoeCart';
import WomenShoeCart from '../components/WomenShoeCart';
import Button from '../components/Button';

function Checkout() {
    const { totalPrice } = usePriceFilter();
     const { cartItems } = useContext(shopContext);
    const { womenCartItems } = useContext(womenShopContext)
    const [isRotated, setRotated] = useState(false);
    const [couponBtn, setCouponBtn] = useState(true);
    const [orderDetails, setOrderDetails] = useState(true)

    const handleClick = () => {
    setRotated(!isRotated);
  };

  const handleDetails = () => {
    setOrderDetails(!orderDetails)
  }

  const [showCardDetails, setShowCardDetails] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [checkCart, setCheckCart] = useState(true)
  const [shippingInfo, setShippingInfo] = useState({});


    const onSubmit = (data) => {
    // e.preventDefault()
  console.log('Shipping Info Submitted:', data);
    setShowCardDetails(true);
    setShippingInfo(data)
    window.scrollTo(0, 0)
  }

   const onSubmitCardDetails = (data) => {
    // e.preventDefault()
  console.log('Shipping Info Submitted:', data);
  setOrderComplete(true)
  window.scrollTo(0, 0)
  }

  return (
    <div className='max-container padding'>
      <h1 className='text-[2.8rem] font-bold font-montserrat mt-9 max-sm:mt-16'> CHECKOUT </h1>
      <div className="flex gap-6 max-sm:gap-2 mt-4">
        <Link to="/cart">
        <p className='font-semibold max-sm:font-bold text-[1.2rem] max-sm:text-[0.7rem] font-palanquin border-black border-b-[3px] px-2 max-sm:px-1 cursor-pointer'>CART</p>
        </Link>
        <p className='font-semibold max-sm:font-bold text-[1.2rem] font-palanquin border-black border-b-[3px] px-2 max-sm:text-[0.7rem]'>SHIPPING</p>
        <p className={`font-semibold max-sm:font-bold text-[1.2rem] font-palanquin border-black border-b-[3px] px-2 max-sm:text-[0.7rem] ${!showCardDetails ? 'text-[#a3a2a2] border-[#a3a2a2]': 'border-black text-[#141414] cursor-pointer'}`}>PAYMENT</p>
      <p className={`font-semibold max-sm:font-bold text-[1.2rem] font-palanquin border-black border-b-[3px] px-2 max-sm:text-[0.7rem] ${!orderComplete || !showCardDetails ? 'text-[#a3a2a2] border-[#a3a2a2]': 'border-black text-[#141414]'}`}>ORDER COMPLETE</p>
      </div>
      <div className="w-full flex max-sm:flex-col-reverse max-lg:flex-col-reverse gap-6">
        <div className="w-2/3 max-sm:w-full sm:w-full">
          
      {!showCardDetails ? (
        <>
        <div className="bg-[#e2e2e2] h-16 pl-12 flex justify-normal items-center mt-9">
            <ol>
              <li className='list-decimal font-montserrat text-[1.4rem]  max-sm:text-[1.2rem] text-[#3b3b3b]'> SHIPPING & BILLING</li>
            </ol>
          </div>
          <p className='mt-9 mb-6 text-[1.5rem] text-[#333232]'>Enter A Shipping Address</p>
        <ShippingInfo onSubmit={onSubmit}/>
        </>
      ) : (
      <div className="">
        {orderComplete ?
        <>
        <Payment shippingInfo={shippingInfo}/>
        </> 
        : <>
         <div className="bg-[#f7f6f6] h-16 pl-12 flex justify-between items-center mt-9">
            <ol>
              <li className='list-decimal font-montserrat text-[1.4rem]  max-sm:text-[1.2rem] text-[#3b3b3b]'> SHIPPING & BILLING</li>
            </ol>
            <a href="/checkout">
            <p className='font-montserrat text-[1.3rem] text-[#3b3b3b] pr-4'>EDIT</p>
            </a>
          </div>
          <div className=" flex gap-3 w-full h-full border-2 border-slate-300 mt-4 p-4 shadow-md flex-wrap">
            <p>{shippingInfo.firstName}</p>
            <p>{shippingInfo.lastName}</p>
            <p>{shippingInfo.streetAddress}</p>
            <p>{shippingInfo.city}</p>
            <p>{shippingInfo.postCode}</p>
            <p>{shippingInfo.country}</p>
          </div>
          <div className="bg-[#e2e2e2] h-16 pl-6 flex justify-normal items-center mt-9">
              <p className='list-decimal font-montserrat text-[1.4rem]  max-sm:text-[1.2rem] text-[#3b3b3b]'>2. PAYMENT METHOD</p>
          </div>
        <CardDetailsForm onSubmitCardDetails={onSubmitCardDetails} />
        </>}
      </div>
      )}
      </div>
        <div className="w-1/3 max-lg:w-full sm:w-full">
         <div className="bg-[#e2e2e2] h-16 pl-6 flex justify-between items-center mt-9">
              <p className='list-decimal font-montserrat text-[1.4rem]  max-sm:text-[1.2rem] text-[#3b3b3b]'>ORDER DETAILS</p>
              <button
        onClick={handleDetails}
        className="transition-transform transform px-6 pl-16 outline-none">
        {/* You can use any arrow icon library or your custom arrow component here */}
        {orderDetails ? <FaArrowDown /> : <FaArrowUp />}
      </button>
          </div>
          {orderDetails ? <div className="w-full mt-3">
        <div className="">
            {listOfMenShoes.map((shoe) => {
                if (cartItems[shoe.rating] !== 0) {
                    return(
                        <div className="" key={shoe.rating}>
                            <ShoeCart data={shoe} checkCart={checkCart}/>
                        </div>
                    ) 
                }
                return null; 
            })}
        </div>
        {/* women cart */}
        <div className="">
            {listOfWomenShoes.map((shoe) => {
                if (womenCartItems[shoe.rating] !== 0) {
                    return(
                        <div className="" key={shoe.rating}>
                            <WomenShoeCart data={shoe} checkCart={checkCart}/>
                        </div>
                    ) 
                }
                return null;
            })}
        </div>
        </div> : ""}
         <div className="bg-[#e2e2e2] h-16 pl-6 flex justify-between items-center mt-9 mb-3">
              <p className='list-decimal font-montserrat text-[1.4rem] max-sm:text-[1rem] text-[#3b3b3b]'>APPLY A PROMO CODE</p>
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
      </div>
      </div>
    </div>
  );
}

export default Checkout;
