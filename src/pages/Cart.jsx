import { useContext } from 'react'
import { listOfMenShoes } from '../constants'
import { shopContext } from '../Context/ShopContext'
import ShoeCart from '../components/ShoeCart';

const Cart = () => {
    const { cartItems } = useContext(shopContext);
  return (
    <section className='padding max-container'>
        <div className="">
            <h1> Your Cart Items </h1>
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
        <div className="">
            <p>Subtotal: $</p>
            <button> continue shopping </button>
            <button> Checkout </button>
        </div>
    </section>
  )
}

export default Cart