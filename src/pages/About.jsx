import { useState } from "react"
import CustomerReviews from "../sections/CustomerReviews"
import aboutShoe from "../assets/assets/images/about-shoe.jpg"
import arrow from "../assets/assets/images/icons8-arrow-down-48 (1).png"
import arrowblack from "../assets/assets/images/icons8-arrow-down-48.png"

import Button from "../components/Button"
import { aboutSec } from "../constants"

const About = () => {
  const [about, setAbout] = useState(true)
  return (
    <section className="">
      <div className="padding">
      <div className="bg-black max-container">
      <div className="flex justify-between lg:px-16 lg:flex-1 shoe-about mt-11 max-sm:mt-[4rem] gap-6 lg:gap-12 text-white lg:h-[25rem] py-5">
        <div className="w-1/2 sm:w-[100%] max-sm:w-[100%] sm:pl-3 max-sm:pl-3 max-sm:pr-2 sm:pb-5">
        <h1 className="text-4xl max-sm:font-[28px] font-semibold pb-4 lg:pb-8">The Current Culture Marketplace</h1>
        <p>
         Our mission is to provide exclusive access to the world’s most coveted items in the smartest way possible. Buy and sell the hottest sneakers, shoes, and accessories effortlessly.
        </p>
        </div>
        <div className=" lg:pr-3 w-1/2 sm:w-[100%] max-sm:w-[100%]">
          <img src={aboutShoe} alt="about shoe" className="w-[100%] h-[22rem]  object-center lg:h-[100%] object-fill flex items-center justify-center" 
          />
        </div>
        </div>
        <div className="flex aboutflex max-sm:flex-col gap-3 lg:flex-1 lg:justify-between box-border mx-[auto] lg:w-[43rem] pb-4 aboutrem max-sm:mx-12">
          <div className="flex justify-between gap-1 bg-coral-red">
        <Button label= "Verification" about={about}/>
        <p className="text-center flex justify-center items-center text-lg text-white pr-2">&gt; &gt; &gt;</p>
        </div>
         <div className="flex justify-between gap-1 bg-coral-red">
        <Button label= "Buyers" about={about}/>
        <p className="text-center flex justify-center items-center text-lg text-white pr-2">&gt; &gt; &gt;</p>
        </div>
         <div className="flex justify-between gap-1 bg-coral-red">
        <Button label= "Sellers" about={about}/>
        <p className="text-center flex justify-center items-center text-lg text-white pr-2">&gt; &gt; &gt;</p>
        </div>
        </div>
        </div>
        <div className="lg:flex flex-wrap padding">
        {aboutSec.map((item) => {
          return (
            <div className="w-1/3 max-lg:w-1/2 pl-2 max-sm:w-full mx-auto mt-6 lg:mt-9 about-item" key={item.icon}>
              <img src={item.icon} alt="img"  className="w-[100px] max-sm:w-[80px] mx-[auto] max-sm:my-6"/>
              <h2 className="font-semibold text-center mb-2 lg:mt-2 text-lg ">{item.title}</h2>
              <p className="text-center">{item.text}</p>
              </div>
          )
        })}
        </div>
        </div>
        <div className="flex flex-wrap w-full pt-12 sm:padding">
          <div className="flex flex-col justify-between text-center w-1/2 bg-[#fefcff] shadow-md py-16 font-bold text-lg">
            <h2 className="text-[2.5rem] max-sm:text-[1.6rem] text-coral-red pb-4">BUY</h2>
            <div className="py-8">
            <div className="flex flex-col justify-center mx-auto rounded-[50%] bg-black w-[50px] text-white text-lg text-center mb-8 p-4 text-[2rem] font-semibold"> 1 </div>
              <p className="text-[2rem] text-[#232B2B] font-semibold max-sm:text-[0.9rem]">Place A Bid Or Buy Now</p>
              </div>
              <img src={arrow} alt="" className="py-6 w-[3.125rem] mx-[auto]" />
               <div className="py-8">
            <div className="flex flex-col justify-center mx-auto rounded-[50%] bg-black w-[50px] text-white text-lg text-center mb-8 p-4 text-[2rem] font-semibold"> 2 </div>
              <p className="text-[2rem] text-[#232B2B] font-semibold max-sm:text-[0.9rem]">Blink Verification</p>
              </div>
              <img src={arrow} alt="" className="py-6 w-[3.125rem] mx-[auto]" />
              <div className="py-8">
            <div className="flex flex-col justify-center mx-auto rounded-[50%] bg-black w-[50px] text-white text-lg text-center mb-8 p-4 text-[2rem] font-semibold"> 3 </div>
              <p className="text-[2rem] text-[#232B2B] font-semibold max-sm:text-[0.9rem]">We Ship To You</p>
              </div>
          </div>
          <div className="flex flex-col justify-between text-center w-1/2 bg-black shadow-md py-16 font-bold text-lg">
            <h2 className="text-[2.5rem] text-coral-red pb-4 max-sm:text-[1.6rem]">SELL</h2>
            <div className="py-8">
            <div className="flex flex-col justify-center mx-auto rounded-[50%] bg-white w-[50px] text-black text-lg text-center mb-8 p-4 text-[2rem] font-semibold"> 1 </div>
              <p className="text-[2rem] text-white font-semibold max-sm:text-[0.9rem]">Place An Ask Or Sell Now</p>
              </div>
              <img src={arrowblack} alt="" className="py-6 w-[3.125rem] mx-[auto] bg-black" />
               <div className="py-8">
            <div className="flex flex-col justify-center mx-auto rounded-[50%] bg-white w-[50px] text-black text-lg text-center mb-8 p-4 text-[2rem] font-semibold"> 2 </div>
              <p className="text-[2rem] text-white font-semibold max-sm:text-[0.9rem]">Ship Us Your Sold Item</p>
              </div>
              <img src={arrowblack} alt="" className="py-6 w-[3.125rem] mx-[auto] text-white" />
              <div className="py-8">
            <div className="flex flex-col justify-center mx-auto rounded-[50%] bg-white w-[50px] text-black text-lg text-center mb-8 p-4 text-[2rem] font-semibold"> 3 </div>
              <p className="text-[2rem] text-white font-semibold max-sm:text-[0.9rem]">We Verify & You Get Paid</p>
              </div>
          </div>
        </div>
        <div className="padding">
         <CustomerReviews />
         </div>
    </section>
  )
}

export default About
