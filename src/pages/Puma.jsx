import React from 'react';
import { listOfMenShoes, gender } from '../constants';


const Puma = () => {
  const pumaShoes = listOfMenShoes.filter((shoe) => shoe.BrandName.toLowerCase().includes("puma"));
  return (
    <section className='shoe-grid w-full mt-14 bg-white max-container'>
      {pumaShoes.map((shoe) => {
      return (
        <div key={shoe.rating} className="shoe-grid-item shoe-flex hover:shadow-lg hover:shadow-white-500/50 box-border mb-2">
        <div className="w-[100%] h-[320px] hover:h-[326px] bg-slate-400">
        <img src={shoe.imgURL} alt="img"
        className="cursor-pointer object-fill h-full w-full flex justify-center items-center"
        />
        </div>
        <div className="flex flex-col text-left mt-3 pl-6 pr-[8rem] sm:pl-6 sm:pr-[4rem]" >
           <p className="text-black font-semibold tracking-widest text-[20px]">{shoe.BrandName}</p>
           <p className="tracking-widest text-coral-red text-lg mt-2">
              {gender.map((item) => (
                 <span key={item.men}>
                  {item.men}
                  </span>
              ))}
            </p>
          <p className="text-coral-red tracking-widest text-lg mt-2">{shoe.Color} Color</p>
           <p className="text-black tracking-wider text-[20px] mt-3 mb-4 font-semibold">£{shoe.Price}.00</p>
        </div>
        </div>
      )
    })}
    </section>
  )
}

export default Puma