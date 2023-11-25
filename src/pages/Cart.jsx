import { useContext } from 'react'
import { listOfMenShoes } from '../constants'
import { shopContext } from '../Context/ShopContext'
import ShoeCart from '../components/ShoeCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(shopContext);
    const totalAmount = getTotalCartAmount();
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
        { totalAmount > 0 ? 
        <div className="">
            <p>Subtotal: £{totalAmount}</p>
            <button onClick={() => navigate(-1)} className='bg-slate-200 p-7'> continue shopping </button>
            <button> Checkout </button>
        </div> : <h1>YOUR CART IS EMPTY</h1>}
    </section>
  )
}

export default Cart