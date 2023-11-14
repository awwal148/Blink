import { NavLink, Link, Outlet } from "react-router-dom";
import { shoeBrand } from "../constants";
import { useState } from "react";
import WomenAllShoes from "../pages/womenAllShoes";
import Result from "./Result";

const WomenShoes = () => {
  const [ displayAllShoes, setDisplayAllShoes ] = useState(true)

  const DisplayShoes = () => {
    setDisplayAllShoes(true)
  }

  const DontDisplayAllShoe = () => {
    setDisplayAllShoes(false)
  }
  return (
    <section className="pt-8">
        <Result />
        <div className="flex flex-col max-container lg:flex-row">
          <div className="flex justify-between pt-4 flex-wrap lg:flex-col lg:h-[400px] lg:mt-11 lg:w-[15rem] lg:text-[20px] lg:mr-6 max-sm:text-[0.74rem]">
            <>
                <p onClick={DisplayShoes} className="cursor-pointer font-semibold hover:font-bold">
                  <Link to="/men" className="">All Shoes</Link></p>
               </>
          {   
            shoeBrand.map((brands) => {
              return (
                <>
                <NavLink to={brands.href} key={brands.name} onClick={DontDisplayAllShoe} className={({isActive}) =>`${!displayAllShoes && isActive ? "text-coral-red sm:border-b-4 sm:border-coral-red": "text-gray-400 lg:text-black font-semibold hover:font-bold"}`}>
                  {brands.name}
                </NavLink>
                </>
              )
            })
          }
          </div>
          <div className="">
            {!displayAllShoes && <Outlet />}
        {displayAllShoes && <WomenAllShoes />}
            </div>
        </div>
    </section>
  )
}


export default WomenShoes
