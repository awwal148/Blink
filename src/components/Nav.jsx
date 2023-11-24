import { hamburger } from '../assets/assets/icons';
import { navLinks } from '../constants';
import iconClose  from '../assets/assets/icons/icon-close.svg';
import iconAccount  from '../assets/assets/icons/icons8-account-32.png'
import iconCart  from '../assets/assets/icons/icons8-add-to-cart-24.png'
import BrandLogo  from '../assets/assets/images/BrandLogo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    const [ navMenu, SetNavMenu ] = useState(false)

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
              <img src={iconAccount} alt='img' className='w-[2.5rem] cursor-pointer'/>
            <Link to="/cart">
              <img src={iconCart} alt='img' className='w-[2.2rem] cursor-pointer'/>
              </Link>
            </div>
            <div className="hidden max-lg:block">
              <div className="flex justify-between gap-4">
               <img src={iconAccount} alt='img' className='w-[2.5rem] cursor-pointer'/>
               <Link to= "/cart">
              <img src={iconCart} alt='img' className='w-[2.2rem] cursor-pointer'/>
              </Link>
                <img 
                src={hamburger} 
                alt="hamburger"
                width={25}
                height={25}
                 onClick={NavMenuBtn}/>
                 </div>
            </div>
        </nav>
        {navMenu && <div className='absolute top-0 right-0 bg-white w-[60%] min-h-[600px]  shadow-lg shadow-blue-500/50 p-10 animate-slideIn lg:hidden z-40'>
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
</ul>
        </div>}
        </div>
    </header>
  )
}

export default Nav