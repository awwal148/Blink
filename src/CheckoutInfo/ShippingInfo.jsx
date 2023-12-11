import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm, useFieldArray, yupResolver } from 'react-hook-form';
import * as Yup from 'yup';

const ShippingInfo = ({onSubmit}) => {

    const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  streetAddress: Yup.string().required('Street Address is required'),
  postCode: Yup.string().required('Post code is required'),
  country: Yup.string().required('Input country name'),
  city: Yup.string().required('City is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone Number is required').matches(/^\d{11}$/, 'Invalid phone number'),
});
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationSchema)});

  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex max-sm:flex-col gap-4 max-sm:gap-0">
        <div className="mb-4 w-full">
          <label htmlFor="firstName" className="block text-lg font-palanquin font-bold text-black mb-3">
            FIRST NAME:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register('firstName', { required: 'FirstName is required' })}
            className="mt-1 p-2 border rounded-md w-full py-5 bg-transparent"
          //  onChange={(event) => setFirstName(event.target.value)}
            required
          />
          <p>{errors.firstName?.message}</p>
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="lastName" className="block text-lg font-palanquin font-bold text-black mb-3">
            LAST NAME:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            {...register('lastName', { required: 'LastName is required' })}
            // onChange={(event) => setLastName(event.target.value)}
            className="mt-1 p-2 border rounded-md w-full py-5"
            required
          />
                    {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
              )}
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="streetAddress" className="block text-lg font-bold font-palanquin text-black mb-3">
            Street Address :
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            {...register('streetAddress', { required: 'Street Address is required' })}
            // onChange={(event) => setRegisterEmail(event.target.value)}
            className="mt-1 p-2 border rounded-md w-full py-5"
            required
          />
        </div>
        <div className="flex max-sm:flex-col gap-4 max-sm:gap-0">
        <div className="mb-4 w-full">
          <label htmlFor="postCode" className="block text-lg font-bold font-palanquin text-black mb-3">
            Post Code :
          </label>
          <input
            type="text"
            id="postCode"
            name="postCode"
            {...register('postCode', { required: 'input Post Code' })}
            // onChange={(event) => setRegisterEmail(event.target.value)}
            className="mt-1 p-2 border rounded-md w-full py-5"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="city" className="block text-lg font-bold font-palanquin text-black mb-3">
            City :
          </label>
          <input
            type="text"
            id="city"
            name="city"
            {...register('city', { required: 'City name is required' })}
            // onChange={(event) => setRegisterEmail(event.target.value)}
            className="mt-1 p-2 border rounded-md w-full py-5"
            required
          />
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-lg font-bold font-palanquin text-black mb-3">
            Country :
          </label>
          <input
            type="text"
            id="country"
            name="country"
            {...register('country', { required: 'Country name is required' })}
            // onChange={(event) => setRegisterEmail(event.target.value)}
            className="mt-1 p-2 border rounded-md w-full py-5"
            required
          />
        </div>
          <p className='mt-9 mb-6 text-[1.5rem] text-[#333232]'>Enter Contact Info</p>
          <div className="flex max-sm:flex-col gap-4 max-sm:gap-0">
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block text-lg font-bold font-palanquin text-black mb-3">
            Email :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', { required: 'Email is required' })}
            // onChange={(event) => setRegisterEmail(event.target.value)}
            className="mt-1 p-2 border rounded-md w-full py-5"
            required
          />
                    {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="phone" className="block text-lg font-bold font-palanquin text-black mb-3">
            Phone Number :
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            {...register('phone', {
                  required: 'Phone Number is required',
                  pattern: {
                    value: /^\d{11}$/,
                    message: 'Invalid phone number',
                  },
                })}
            // onChange={(event) => setRegisterEmail(event.target.value)}
            className="mt-1 p-2 border rounded-md w-full py-5"
            required
          />
          {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
        </div>
        </div>
        <div className="flex gap-4 my-6">
            <input type='checkbox' className='w-8 h-8'/>
            <p className='text-lg text-[#333232]'>Add me to BLINK mailing list</p>
        </div>
        <button type="submit" className="bg-coral-red hover:bg-red-500 font-montserrat font-semibold text-white text-[1.5rem] p-2 w-1/2 max-sm:w-full py-5 text-center">
          CONTINUE TO PAYMENT
        </button>
      </form>
    </div>
  );
}

export default ShippingInfo