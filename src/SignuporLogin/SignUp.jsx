import { useAuthFilter } from '../Context/AuthContext';
import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const { createUser } = useAuthFilter()
    const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  // const [registerEmail, setRegisterEmail]  = useState('')
  // const [registerPassword, setRegisterPassword]  = useState('')
  // const [firstName, setFirstName]  = useState('')
  // const [lastName, setLastName]  = useState('')

  const [error, setError] = useState('')
  const [userError, setUserError] = useState('')

    const [ passwordVisible, setPasswordVisible ] = useState(false)

    const showOrHidePassword = () => {
        setPasswordVisible(!passwordVisible)
    }

    const onSubmit = async (data) => {
    // e.preventDefault()
  try{
    await createUser(data.email, data.password, data.firstName, data.lastName)
    navigate("/dashboard")
  } catch (e) {
   setError(e.message)
    setInterval(() => {
      setError("")
    }, 8000);
    console.log(e.message)
  }
  }

  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-lg font-palanquin font-bold text-black mb-3">
            FIRST NAME:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register('firstName', { required: 'FirstName is required' })}
            className="mt-1 p-2 border rounded-md w-full py-5"
          //  onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
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
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold font-palanquin text-black mb-3">
            EMAIL :
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
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-palaquin font-bold text-black mb-3">
            PASSWORD :
          </label>
          <div className="flex justify-center items-center border-[3px] rounded-md hover:border-black">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
            {...register('password', { required: 'Password is required' })}
            // onChange={(event) => setRegisterPassword(event.target.value)}
            className="mt-1 p-2 w-full outline-none py-5"
            required
          />
          <button type='button' className='p-2 focus:outline-none' onClick={showOrHidePassword}>{passwordVisible ? "Hide" : "Show"}</button>
          </div>
        </div>
        <button type="submit" className="bg-coral-red hover:bg-red-500 font-montserrat font-semibold text-white text-[1.5rem] p-2 rounded-md w-full py-5 text-center">
          SIGN UP
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      {userError && <p className="text-red-500">{userError}</p>}
      {error}
      {userError}
    </div>
  );
}

export default SignUp;
