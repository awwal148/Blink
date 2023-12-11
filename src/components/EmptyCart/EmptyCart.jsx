import React from 'react'
import iconCart from "../../assets/assets/icons/icon-cart.svg"
import { Link } from 'react-router-dom'
import { useAuthFilter } from '../../Context/AuthContext'

const EmptyCart = () => {
  const { user } = useAuthFilter();
  return (
    <section className='flex flex-col justify-center items-center h-[60vh] font-palanquin'>
        <img src={iconCart} alt='img' className='w-[10rem]' />
        <h1 className='font-semibold text-[2rem] mt-8 max-lg:text-[1.5rem]'>Your Shopping Cart is Empty</h1>
            {!user && <p className='text-lg mt-3 text-[0.9rem]'>Please 
            <Link to="/account">
            <span className='border-b-2 border-black cursor-pointer font-bold'> SIGN IN </span>
            </Link>
             to view your saved Cart</p>}
    </section>
  )
}

export default EmptyCart