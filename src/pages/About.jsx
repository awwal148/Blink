import { useState } from "react"
import aboutShoe from "../assets/assets/images/about-shoe.jpg"
import Button from "../components/Button"
import { aboutSec } from "../constants"

const About = () => {
  const [about, setAbout] = useState(true)
  return (
    <section className="padding max-container">
      <div className="bg-black ">
      <div className="flex justify-between lg:px-16 lg:flex-1 shoe-about mt-9 max-sm:mt-[3.8rem] gap-6 lg:gap-12 text-white lg:h-[25rem] py-5">
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
        <div className="lg:flex flex-wrap">
        {aboutSec.map((item) => {
          return (
            <div className="sm:w-1/2 max-sm:w-full lg:w-1/3 mx-auto mt-6 lg:mt-9" key={item.icon}>
              <img src={item.icon} alt="img"  className="w-[100px] max-sm:w-[80px] mx-[auto] max-sm:my-6"/>
              <h2 className="font-semibold text-center mb-2 lg:mt-2 text-lg">{item.title}</h2>
              <p className="text-center">{item.text}</p>
              </div>
          )
        })}
        </div>
    </section>
  )
}

export default About
