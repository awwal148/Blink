import React from "react"
import iconCart from "../assets/assets/icons/icon-cart.svg"
import { gender, listOfWomenShoes } from "../constants"
import { useWomenFilter } from "../components/ContextApi.JSX"
const WomenAllShoes = () => {  
    const { setWomenBrandFilter } = useWomenFilter();

     React.useEffect(() => {
    try {
      setWomenBrandFilter(''); // Clear the filter for all shoes
    } catch (error) {
      console.error('Error setting brand filter:', error);
    }
  }, [setWomenBrandFilter])
  return (
    <section className="shoe-grid w-full mt-14 bg-white max-container">
    {listOfWomenShoes.map((shoe) => {
      return (
        <div key={shoe.rating} className="shoe-grid-item shoe-flex hover:shadow-lg hover:shadow-white-500/50 box-border mb-2">
        <div className="w-[100%] h-[20rem] hover:h-[20.4rem] bg-slate-400">
        <img src={shoe.imgURL} alt="img"
        className="cursor-pointer object-fill h-full w-full flex justify-center items-center"
        />
        </div>
        <div className="flex flex-col text-left mt-3" >
          <div className="lg:pl-6 pr-[8rem] sm:pl-6 max-sm:pl-2 max-sm:pr-0 ">
           <p className="text-black font-semibold tracking-widest text-[20px] max-sm:text-[0.90rem]">{shoe.BrandName}</p>
           <p className="tracking-widest text-coral-red text-lg mt-2 max-sm:text-[0.80rem]">
              {gender.map((item) => (
                 <span key={item.women}>
                  {item.women}
                  </span>
              ))}
            </p>
          <p className="text-coral-red tracking-widest text-lg mt-2 max-sm:text-[0.80rem]">{shoe.Color} Color</p>
          </div>
          <div className="flex justify-between align-center px-6 mb-6 max-sm:px-2">
           <p className="text-black tracking-wider text-[20px] mt-3 mb-4 font-semibold max-sm:text-[0.90rem]">£{shoe.Price}.00</p>
           <img src={iconCart} alt="img" className="w-[1rem] cursor-pointer" />
           </div>
        </div>
        </div>
      )
    })}
  </section>
  )
  
}


export default WomenAllShoes
