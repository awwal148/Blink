import React, { useState } from 'react';
// import { useForm, useFieldArray, yupResolver } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import CardDetailsForm from '../CardDetails/CardDetails';
import ShippingInfo from '../CheckoutInfo/ShippingInfo';

function Checkout() {
    const navigate = useNavigate();

//     const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required('First Name is required'),
//   lastName: Yup.string().required('Last Name is required'),
//   streetAddress: Yup.string().required('Street Address is required'),
//   postalCode: Yup.string().required('Postal code is required'),
//   country: Yup.string().required('Input country name'),
// });
//   const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm({resolver: yupResolver(validationSchema)});

  const [error, setError] = useState('')
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false)


  const CardDetails = (data) => {
    setShowCardDetails(data)
    console.log('yoh')
  }
    const onSubmit = (data) => {
    // e.preventDefault()
  console.log('Shipping Info Submitted:', data);
    setShowCardDetails(true);
  }

   const onSubmitCardDetails = (data) => {
    // e.preventDefault()
  console.log('Shipping Info Submitted:', data);
  setOrderComplete(true)
  }

  return (
    <div className='max-container padding'>
      <h1 className='text-[2.8rem] font-bold font-montserrat mt-9'> CHECKOUT </h1>
      <div className="flex gap-6 mt-4">
        <Link to="/cart">
        <p className='font-semibold text-[1.2rem] font-palanquin border-black border-b-[3px] px-2'>CART</p>
        </Link>
        <p className='font-semibold text-[1.2rem] font-palanquin border-black border-b-[3px] px-2'>SHIPPING</p>
        <p onClick={() => CardDetails(false)} className={`font-semibold text-[1.2rem] font-palanquin border-black border-b-[3px] px-2 ${!showCardDetails ? 'text-[#a3a2a2] border-[#a3a2a2]': 'border-black text-[#141414] cursor-pointer'}`}>PAYMENT</p>
        <p className={`font-semibold text-[1.2rem] font-palanquin border-black border-b-[3px] px-2 ${!orderComplete ? 'text-[#a3a2a2] border-[#a3a2a2]': 'border-black text-[#141414]'}`}>ORDER COMPLETE</p>
      </div>
      <div className="w-full">
        <div className="w-2/3">
          
      {!showCardDetails ? (
        <>
        <div className="bg-[#e2e2e2] h-16 pl-12 flex justify-normal items-center mt-9">
            <ol>
              <li className='list-decimal font-montserrat text-[1.6rem] text-[#3b3b3b]'> SHIPPING & BILLING</li>
            </ol>
          </div>
          <p className='mt-9 mb-6 text-[1.5rem] text-[#333232]'>Enter A Shipping Address</p>
        <ShippingInfo onSubmit={onSubmit}/>
        </>
      ) : (
      <div className="">
        <CardDetailsForm onSubmitCardDetails={onSubmitCardDetails}/>
      </div>
      )}
      </div>
      </div>
    </div>
  );
}

export default Checkout;
