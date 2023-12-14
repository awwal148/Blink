import { useAuthFilter } from '../Context/AuthContext';
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function SignUp() {
    const { createUser } = useAuthFilter();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8).required('Password must contain a minimum of 8 characters '),
});
  const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm({resolver: yupResolver(validationSchema)});

  const [error, setError] = useState('')


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
  setTimeout(() => {
        setError('');
        reset()
        clearErrors(); // Clear form errors
      }, 5000);
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
          <p>{errors.firstName?.message}</p>
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
          <p className='text-coral-red pt-2'>{errors.password?.message}</p>
        </div>
        <button type="submit" className="bg-coral-red hover:bg-red-500 font-montserrat font-semibold text-white text-[1.5rem] p-2 rounded-md w-full py-5 text-center">
          SIGN UP
        </button>
        {error && <p className="text-red-500 font-palanquin font-semibold">{error}</p>}
      </form>
      {error}
    </div>
  );
}

export default SignUp;
