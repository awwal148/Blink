// CardDetailsForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const CardDetailsForm = ({ onSubmitCardDetails }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmitCardDetails)} className="flex flex-col gap-4">
      {/* Card Details Section */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold mb-2">Card Details</h3>

        <div className="flex flex-col gap-2">
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
      </div>

      {/* Submit Button for Card Details */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md self-start"
      >
        Submit Card Details
      </button>
    </form>
  );
};

export default CardDetailsForm;
