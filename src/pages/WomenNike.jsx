import React from 'react';
import { listOfWomenShoes, gender } from '../constants';
import { useFilter } from '../components/ContextApi.JSX';

const WomenNike = () => {
  // const {setBrandFilter} = useFilter();
  const currentBrandName = "nike"
  const nikeShoes = listOfWomenShoes.filter((shoe) => shoe.BrandName.toLowerCase().includes(currentBrandName));

  // React.useEffect(() => {
  //   setBrandFilter(currentBrandName)
  // },[setBrandFilter])
  return (
    <section className='shoe-grid w-full mt-14 bg-white max-container'>
      {nikeShoes.map((shoe) => {
      return (
        <div key={shoe.rating} className="shoe-grid-item shoe-flex hover:shadow-lg hover:shadow-white-500/50 box-border mb-2">
        <div className="w-[100%] h-[20rem] hover:h-[20.4rem] bg-slate-400">
        <img src={shoe.imgURL} alt="img"
        className="cursor-pointer object-fill h-full w-full flex justify-center items-center"
        />
        </div>
        <div className="flex flex-col text-left mt-3 lg:pl-6 pr-[8rem] sm:pl-6 max-sm:pl-2 max-sm:pr-0" >
           <p className="text-black font-semibold tracking-widest text-[20px] max-sm:text-[0.90rem]">{shoe.BrandName}</p>
           <p className="tracking-widest text-coral-red text-lg mt-2 max-sm:text-[0.80rem]">
              {gender.map((item) => (
                 <span key={item.women}>
                  {item.men}
                  </span>
              ))}
            </p>
          <p className="text-coral-red tracking-widest text-lg mt-2 max-sm:text-[0.80rem]">{shoe.Color} Color</p>
           <p className="text-black tracking-wider text-[20px] mt-3 mb-4 font-semibold max-sm:text-[0.90rem]">£{shoe.Price}.00</p>
        </div>
        </div>
      )
    })}
    </section>
  );
};

export default WomenNike