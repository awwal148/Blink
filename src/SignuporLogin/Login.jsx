import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthFilter } from '../Context/AuthContext'


function Login() {
  const { createUser, signIn, user } = useAuthFilter()
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginEmail, setLoginEmail]  = useState('')
  const [loginPassword, setLoginPassword]  = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
  setError('')
  try{
    await signIn(loginEmail, loginPassword)
    navigate('/dashboard')
  } catch (e) {
    setError(e.message)
    setInterval(() => {
      setError("")
    }, 5000);
    console.log(e.message)
  }
  }
  return (
    <div>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-palanquin font-bold text-black mb-3">
            EMAIL :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(event) => setLoginEmail(event.target.value)}
            className="mt-1 p-2 border rounded-md w-full py-5"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-bold font-palanquin text-black mb-3">
            PASSWORD :
          </label>
          <div className="flex items-center border-[3px] rounded-md hover:border-black">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              onChange={(event) => setLoginPassword(event.target.value)}
              className="mt-1 p-2 w-full outline-none py-5 text-lg"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="p-2 focus:outline-none font-palanquin"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="flex gap-5">
            <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 border-2 border-gray-300 focus:outline-none focus:border-blue-500 checked:bg-coral-red" />

        {/* <input type="checkbox" className='w-7 h-7 checked:bg-coral-red bg-blue-400' />  */}
        <p>Add me to the BLINK mailing list</p>
        </div>
        <p className='my-6 text-sm font-palanquin'>By signing up, you agree to receive marketing emails from BLINK and confirm you’re at least 16 years old. You can unsubscribe at any time free of charge. To improve your experience, we’ll process your data to better personalise the emails we send you.</p>
        <button type="submit" onClick={login} className="bg-coral-red hover:bg-red-500 font-montserrat font-semibold text-white text-[1.5rem] p-2 rounded-md w-full py-5 text-center">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
