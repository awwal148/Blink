import { useContext } from 'react'
import { listOfMenShoes, listOfWomenShoes } from '../constants'
import { shopContext } from '../Context/ShopContext'
import ShoeCart from '../components/ShoeCart';
import { useNavigate } from 'react-router-dom';
import WomenShoeCart from '../components/WomenShoeCart';
import { womenShopContext } from '../Context/WomenShopContext';

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(shopContext);
    const {womenCartItems, getWomenTotalCartAmount } = useContext(womenShopContext)
    const totalAmount = getTotalCartAmount();
    const womenTotalAmount = getWomenTotalCartAmount();
    //sum of both totalAmount and womenTotalAmount
    const totalCartAmount = totalAmount + womenTotalAmount

    console.log('totalAmount:', totalAmount);
  console.log('womenTotalAmount:', womenTotalAmount);
  console.log('allTotalAmount:', totalCartAmount);

    const navigate = useNavigate()
  return (
    <section className='padding max-container'>
        <div className="">
        </div>
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

        { totalCartAmount > 0 ? 
        <div className="">
            <p>Subtotal: £{totalAmount}</p>
            <button onClick={() => navigate(-1)} className='bg-slate-200 p-7'> continue shopping </button>
            <button> Checkout </button>
            <button onClick={() => localStorage.clear()} className='bg-slate-200 p-7'>Delete All Item</button>
        </div> : <h1>YOUR CART IS EMPTY</h1>}
    </section>
  )
}

export default Cart