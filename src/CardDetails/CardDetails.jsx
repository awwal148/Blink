// CardDetailsForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
import { womenShopContext } from '../Context/WomenShopContext';

const CardDetailsForm = ({ onSubmitCardDetails }) => {
   const { clearCart } = useContext(shopContext);
  const { clearWomenCart } = useContext(womenShopContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to clear both men's and women's carts
  const handleClearCart = () => {
    // Clear men's cart
    clearCart();
    // Clear women's cart
    clearWomenCart();
  };

  return (
    <form  onSubmit={handleSubmit((data) => {
        // First, handle the card details submission
        onSubmitCardDetails(data);
        // Then, clear the carts
        handleClearCart();
      })} className="flex flex-col gap-4">
      {/* Card Details Section */}
      <div className="flex flex-col">
        <h3 className="text-[1.3rem] font-semibold my-2">Credit Details</h3>

        <div className="flex flex-col gap-2">
          <div className="">
           <label htmlFor="cardName">Name on card</label>
          <input
            type="text"
            id="cardName"
            required
            {...register('cardName')}
            className={`mt-1 p-2 border rounded-md w-full py-5 ${
              errors.cardNumber ? 'border-red-500' : ''
            }`}
          />
          {errors.cardName && (
            <p className="text-red-500 text-sm">{errors.cardName.message}</p>
          )}
          </div>
          <div className="">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            {...register('cardNumber')}
            className={`mt-1 p-2 border rounded-md w-full py-5 ${
              errors.cardNumber ? 'border-red-500' : ''
            }`}
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
          )}
          </div>
          <div className="flex gap-4">
          <div className="w-full">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            {...register('expiryDate')}
            className={`mt-1 p-2 border rounded-md w-full py-5 ${
              errors.expiryDate ? 'border-red-500' : ''
            }`}
          />
          {errors.expiryDate && (
            <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>
          )}

          {/* Additional card details fields can be added here */}
          </div>
           <div className="w-full">
          <label htmlFor="card cvc">CVC/CVV</label>
          <input
            type="text"
            id="cvc"
            {...register('cvc')}
            className={`mt-1 p-2 border rounded-md w-full py-5 ${
              errors.cvc ? 'border-red-500' : ''
            }`}
          />
          {errors.cvc && (
            <p className="text-red-500 text-sm">{errors.cvc.message}</p>
          )}

          {/* Additional card details fields can be added here */}
          </div>
          </div>
          </div>
        </div>
      {/* Submit Button for Card Details */}
      <button
        type="submit"
        className="bg-coral-red text-[1.6rem] font-semibold hover:bg-[#ff4040] text-white w-full px-4 py-4 rounded-md self-start"
      >
        PLACE ORDER
      </button>
    </form>
  );
};

export default CardDetailsForm;
