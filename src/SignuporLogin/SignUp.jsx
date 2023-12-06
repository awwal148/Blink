import { useAuthFilter } from '../Context/AuthContext';
import React, { useState } from 'react';

function SignUp() {
    const { createUser } = useAuthFilter()

  const [registerEmail, setRegisterEmail]  = useState('')
  const [registerPassword, setRegisterPassword]  = useState('')
  const [error, setError] = useState('')
    const [ passwordVisible, setPasswordVisible ] = useState(false)

    const showOrHidePassword = () => {
        setPasswordVisible(!passwordVisible)
    }

    const register = async (e) => {
    e.preventDefault()
  setError('')
  try{
    await createUser(registerEmail, registerPassword)
  } catch (e) {
    setError(e.message)
    console.log(e.message)
  }
  }

  return (
    <div className=''>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-lg font-palanquin font-bold text-black mb-3">
            FIRST NAME:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 border rounded-md w-full py-5"
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
            onChange={(event) => setRegisterEmail(event.target.value)}
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
            onChange={(event) => setRegisterPassword(event.target.value)}
            className="mt-1 p-2 w-full outline-none py-5"
            required
          />
          <button type='button' className='p-2 focus:outline-none' onClick={showOrHidePassword}>{passwordVisible ? "Hide" : "Show"}</button>
          </div>
        </div>
        <button type="submit" onClick={register} className="bg-coral-red hover:bg-red-500 font-montserrat font-semibold text-white text-[1.5rem] p-2 rounded-md w-full py-5 text-center">
          SIGN UP
        </button>{error}
      </form>
    </div>
  );
}

export default SignUp;
