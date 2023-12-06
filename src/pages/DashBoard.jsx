import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';

const DashBoard = () => {
    const navigate = useNavigate()
     const logOut = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <section className='max-container padding mt-9'>
        <div className="mt-9">
        <div className="flex gap-4">
        <Link to="/">
        <h3 className='font-bold font-palanquin text-[1.4rem]'>Home</h3>
        </Link>
        <li className='text-[#3b3b3b] font-palanquin text-[1.2rem]'>My Account</li>
        </div>
        <div className="">
            <h2 className='font-semibold text-[1.9rem] font-palanquin mt-3'>Dashboard</h2>
            <p className='text-[3.3rem] font-bold font-montserrat'>My account</p>
        <span onClick={logOut} className='text-[1rem] font-semibold border-b-2 border-coral-red font-montserrat cursor-pointer my-14'>LOGOUT</span>
        </div>
        </div>
        <div className="flex justify-between w- mt-14">
          <div className='flex justify-between w-1/2 border-slate-300 border-b-2'>
            <div className="flex gap-3 mb-4">
              <div className="flex items-center justify-center w-11">
            <IconContext.Provider value={{ style: { backgroundColor: 'white' } }}>
        <FaUserCircle size="2rem" />
      </IconContext.Provider> 
      </div>
      <p className='font-palanquin text-[1.4rem] font-semibold'>Profile</p>
        </div>
        <div className="">
          <p className='border-b-[3px] font-montserrat text-lg font-bold border-slate-500 cursor-pointer'>EDIT PROFILE</p>
        </div>
        </div>
        </div>
    </section>
  )
}

export default DashBoard