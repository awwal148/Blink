import { hamburger } from '../assets/assets/icons';
import { navLinks } from '../constants';
import iconClose  from '../assets/assets/icons/icon-close.svg';
import iconAccount  from '../assets/assets/icons/icons8-account-32.png'
import iconCart  from '../assets/assets/icons/icons8-add-to-cart-24.png'
import BrandLogo  from '../assets/assets/images/BrandLogo.png';
import { useState } from 'react';
import { useItemFilter } from '../Context/ItemsTotalContext';
import { usePriceFilter } from '../Context/CartTotalContext';
import { Link } from 'react-router-dom';
import { GB } from 'country-flag-icons/react/3x2';
import { useAuthFilter } from '../Context/AuthContext';
const Nav = () => {
    const { totalCount } = useItemFilter();
    const { totalPrice } = usePriceFilter();
    const [ navMenu, SetNavMenu ] = useState(false);
    const[accIcon, setAccIcon] = useState(false);

    const { user } = useAuthFilter();

    const accountBtn = () => {
      setAccIcon(!accIcon)
    }
    const NavMenuBtn = () => {
        SetNavMenu(!navMenu);
    }
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <div className='relative z-40'>
        <nav className="flex justify-between items-center max-container">
            <Link  to="/">
                <img src={BrandLogo} 
                alt="Logo"
                width={100}
                height={23} 
                className='bg-transparent'/>
            </Link>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <Link to = {item.href}className="font-montserrat leading-normal text-lg text-slate-gray"> 
                        {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between gap-6 max-lg:hidden">
              <div className="">
                
              <img src={iconAccount} alt='img' onClick={accountBtn} className='w-[2.5rem] cursor-pointer'/>
              </div>
              <div className="relative">
                <Link to="/cart" className="block">
                  <img src={iconCart} alt="img" className="w-[2.2rem] cursor-pointer" />
                  {totalPrice > 0 && (
                    <p className="absolute top-[-1.6rem]  right-[-0.5rem] p-1 px-2 z-10 text-white font-montserrat font-semibold rounded-[50%] bg-black text-sm">
                      {totalCount}
                    </p>
                  )}
                </Link>
                </div>
            </div>
            <div className="hidden max-lg:block">
              <div className="flex justify-between gap-4">
              <div className="relative">
               <Link to= "/cart" className="block">
              <img src={iconCart} alt='img' className='w-[2.2rem] cursor-pointer'/>
               {totalPrice > 0 && (
                    <p className="absolute top-[-1.6rem]  right-[-0.5rem] p-1 px-2 z-10 text-white font-montserrat font-semibold rounded-[50%] bg-black text-sm">
                      {totalCount}
                    </p>
                  )}
              </Link>
              </div>
                <img 
                src={hamburger} 
                alt="hamburger"
                width={25}
                height={25}
                 onClick={NavMenuBtn}/>
                 </div>
            </div>
        </nav>
        {accIcon && <div className="flex flex-col justify-normal items-end z-30 max-sm:hidden">
          <div className="w-[20rem] h-full shadow-md bg-white-400 p-4">
           <div className='flex justify-between border-slate-300 border-b-2'>
            <div className="flex gap-3 mb-6">
              <Link to="/dashboard">
      <p className='font-palanquin text-[1.3rem] text-[#353434]' onClick={accountBtn}>My Account</p>
      </Link>
        </div>
        </div>
        { !user && <div className='flex justify-between border-slate-300 border-b-2 mt-4'>
            <div className="flex gap-3 mb-6">
              <Link to="/account">
      <p className='font-palanquin text-[1.3rem] text-[#353434]' onClick={accountBtn}>Login/SignUp</p>
      </Link>
        </div>
        </div>}

         <div className='flex justify-between border-slate-300 border-b-2 mt-4'>
            <div className="flex gap-3 mb-2 justify-center items-center">
      <p className='font-palanquin text-[1.3rem] text-[#353434]'>Language</p>
        </div>
        <div className=" gap-2 flex">
          <p className='font-montserrat text-lg  cursor-pointer text-[#353434]'>En</p>
          <div className="w-6 ">
           <GB title="United Kingdom" />
           </div>
        </div>
        </div>
          </div>
        </div>}
        {navMenu && <div className='absolute top-0 right-0 bg-white w-[60%] min-h-[600px]  shadow-lg shadow-blue-500/50 p-10 animate-slideIn lg:hidden z-50'>
            {navMenu && (<button onClick={ NavMenuBtn } className=' pl-[90%]  pb-3'> <img src={iconClose} alt="navClose" /></button>)}
           <ul className=" flex max-lg:block">
  {navLinks.map((item) => (
    <div key={item.label} className='flex px-0 py-4'>
      <li>
        <Link to={item.href} onClick={NavMenuBtn} className="font-montserrat leading-normal text-lg text-slate-gray">
          {item.label} 
        </Link>
      </li>
    </div>
  ))}
  <Link to="/dashboard">
  <p className='font-montserrat leading-normal text-lg text-slate-gray mt-3' onClick={NavMenuBtn}>My Account</p>
  </Link>
  <Link to="/account">
  <p className='font-montserrat leading-normal text-lg text-slate-gray mt-5' onClick={NavMenuBtn}>Login/SignUp</p>
  </Link>
</ul>
        </div>}
        </div>
    </header>
  )
}

export default Nav