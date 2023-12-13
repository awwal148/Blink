import React, { useContext } from 'react'
import { listOfMenShoes, listOfWomenShoes } from '../constants'
import { shopContext } from '../Context/ShopContext'
import ShoeCart from '../components/ShoeCart';
import WomenShoeCart from '../components/WomenShoeCart';
import { womenShopContext } from '../Context/WomenShopContext';
import CartReturn from '../components/CartReturn/CartReturn';
import { usePriceFilter } from '../Context/CartTotalContext';
import EmptyCart from '../components/EmptyCart/EmptyCart';
const Cart = () => {
    const { setTotalFilter } = usePriceFilter();
    const { cartItems, getTotalCartAmount } = useContext(shopContext);
    const {womenCartItems, getWomenTotalCartAmount } = useContext(womenShopContext)
    const totalAmount = getTotalCartAmount();
    const womenTotalAmount = getWomenTotalCartAmount();
    //sum of both totalAmount and womenTotalAmount
    const totalCartAmount = totalAmount + womenTotalAmount;

     React.useEffect(() => {
    setTotalFilter(totalCartAmount);
  }, [totalCartAmount]);

//     console.log('totalAmount:', totalAmount);
//   console.log('womenTotalAmount:', womenTotalAmount);
//   console.log('allTotalAmount:', totalCartAmount);

  return (
    <section className='padding max-container box-border font-montserrat'>
        <div className="pt-3 mb-4 mt-16">
            { totalCartAmount > 0 ? 
            <h1 className='font-bold text-[2.8rem] max-sm:text-[2rem]'>MY SHOPPING CART</h1>: ""}
        </div>
        <div className="flex max-sm:flex-col">
            <div className="w-2/3 max-sm:w-full lg:pr-6">
        <div className="">
            {listOfMenShoes.map((shoe) => {
                if (cartItems[shoe.rating] !== 0) {
                    return(
                        <div className="" key={shoe.rating}>
                            <ShoeCart data={shoe}/>
                        </div>
                    ) 
                }
                return null; 
            })}
        </div>
        {/* women cart */}
        <div className="">
            {listOfWomenShoes.map((shoe) => {
                if (womenCartItems[shoe.rating] !== 0) {
                    return(
                        <div className="" key={shoe.rating}>
                            <WomenShoeCart data={shoe}/>
                        </div>
                    ) 
                }
                return null; 
            })}
        </div>
        </div>
        { totalCartAmount > 0 ?
        <div className="w-1/3 max-sm:w-full">
        <CartReturn />
        </div> : "" }
        </div>

        { totalCartAmount > 0 ? 
        <div className="">

        </div> : <EmptyCart />}
    </section>
  )
}

export default Cart