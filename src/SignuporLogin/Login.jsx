import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthFilter } from '../Context/AuthContext';
import { useForm } from 'react-hook-form';

function Login() {
  const { signIn } = useAuthFilter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);
      navigate('/dashboard');
    } catch (e) {
      console.log(e.message);
      setError(e.message)
      setTimeout(() => {
       setError("");
   }, 5000);

    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-palanquin font-bold text-black mb-3">
            EMAIL :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', { required: 'Email is required' })}
            className={`mt-1 p-2 border rounded-md w-full py-5 ${errors.email ? 'border-red-500' : ''}`}
            required
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
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
              {...register('password', { required: 'Password is required' })}
              className={`mt-1 p-2 w-full outline-none py-5 text-lg ${errors.password ? 'border-red-500' : ''}`}
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
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        {/* ... your other form fields ... */}
         {error && <p className='font-semibold text-lg text-red-500 my-4'>Invalid Email or password</p>}
        <button type="submit" className="bg-coral-red hover:bg-red-500 font-montserrat font-semibold text-white text-[1.5rem] p-2 rounded-md w-full py-5 text-center">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
