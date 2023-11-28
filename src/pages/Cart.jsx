import React, { useContext } from 'react'
import { listOfMenShoes, listOfWomenShoes } from '../constants'
import { shopContext } from '../Context/ShopContext'
import ShoeCart from '../components/ShoeCart';
import WomenShoeCart from '../components/WomenShoeCart';
import { womenShopContext } from '../Context/WomenShopContext';
import CartReturn from '../components/CartReturn/CartReturn';
import { usePriceFilter } from '../Context/CartTotalContext';
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
        <div className="pt-3 mb-4">
            <h1 className='font-bold text-[2.8rem]'>MY SHOPPING CART</h1>
        </div>
        <div className="flex">
            <div className="w-2/3 pr-6">
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
        { totalAmount > 0 ?
        <div className="w-1/3">
        <CartReturn />
        </div> : "" }
        </div>

        { totalCartAmount > 0 ? 
        <div className="">

        </div> : <h1>YOUR CART IS EMPTY</h1>}
    </section>
  )
}

export default Cart