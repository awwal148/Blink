import { Link, NavLink, Outlet } from "react-router-dom";
import { shoeBrand } from "../constants";
import { useState } from "react";
import AllShoes from "../pages/AllShoes"

const MenShoes = () => {
  const [ displayAllShoes, setDisplayAllShoes ] = useState(true)

  const DisplayShoes = () => {
    setDisplayAllShoes(true)
  }

  const DontDisplayAllShoe = () => {
    setDisplayAllShoes(false)
  }
  return (
    <section className="pt-8">
        <div className="flex justify-between font-montserrat leading-normal ">
          <h3>0 Results</h3>
          <h3>VIEWS</h3>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between pt-4 flex-wrap">
            <>
                <p onClick={DisplayShoes} className="cursor-pointer">
                  <NavLink to="/men" className= {({isActive}) =>`${!displayAllShoes && isActive ? "text-coral-red border-b-4 border-red-500": "text-gray-400"}`}>All Shoes</NavLink></p>
               </>
          {   
            shoeBrand.map((brands) => {
              return (
                <>
                <NavLink to={brands.href} key={brands.name} onClick={DontDisplayAllShoe} className={({isActive}) =>`${!displayAllShoes && isActive ? "text-coral-red border-b-4 border-red-500": "text-gray-400"}`}>
                  {brands.name}
                </NavLink>
                </>
              )
            })
          }
          </div>
          <div className="">
            {!displayAllShoes && <Outlet />}
        {displayAllShoes && <AllShoes />}
            </div>
        </div>
    </section>
  )
}


export default MenShoes
