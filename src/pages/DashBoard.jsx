import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { IconContext } from 'react-icons';
import { FaUserCircle, FaLock, FaCircle, FaBookMedical, FaBookReader, FaBook } from 'react-icons/fa';
import { useAuthFilter } from '../Context/AuthContext';

const DashBoard = () => {
  const { user } = useAuthFilter()
    const navigate = useNavigate()
     const logOut = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <section className='max-container padding w-full '>
        <div className="mt-16">
        <div className="flex gap-4 mt-4">
        <Link to="/">
        <h3 className='font-bold font-palanquin text-[1.4rem]'>Home</h3>
        </Link>
        <li className='text-[#3b3b3b] font-palanquin text-[1.2rem]'>My Account</li>
        </div>
        <div className="">
            <h2 className='font-semibold text-[1.9rem] font-palanquin mt-3'>Dashboard</h2>
            <p className='text-[3.3rem] font-bold font-montserrat'>My account</p>
        <p onClick={logOut} className='text-[1rem] font-semibold border-b-2 border-coral-red font-montserrat cursor-pointer my-8 inline-block'>LOGOUT</p>
        </div>
        </div>
        <div className="w-full flex max-sm:flex-col gap-12">
        <div className="w-1/2 max-sm:w-full">
        <div className=" w-full mt-14">
          <div className='flex justify-between border-slate-300 border-b-2'>
            <div className="flex gap-3 mb-6">
              <div className="flex items-center justify-center w-11">
            <IconContext.Provider value={{ style: { backgroundColor: 'white', color: '#353434' } }}>
        <FaUserCircle size="2rem" />
      </IconContext.Provider> 
      </div>
      <p className='font-palanquin text-[1.4rem] font-semibold text-[#353434]'>Profile</p>
        </div>
        <div className="">
          <p className='border-b-[3px] font-montserrat text-lg font-bold border-slate-500 cursor-pointer text-[#353434]'>EDIT PROFILE</p>
        </div>
        </div>
        </div>
        <p className='font-montserrat text-lg font-semibold mt-6'>Full Name <span className='text-lg font-palanquin font-normal'>{user?.displayName}</span></p>
        <p className='font-montserrat text-lg font-semibold mt-6'>Email <span className='text-lg font-montserrat font-normal'>{user?.email}</span></p>
        <div className=" w-full mt-14">
          <div className='flex justify-between border-slate-300 border-b-2'>
            <div className="flex gap-3 mb-6">
              <div className="flex items-center justify-center w-11">
            <IconContext.Provider value={{ style: { backgroundColor: 'white', color: '#353434' } }}>
        <FaLock size="2rem" />
      </IconContext.Provider> 
      </div>
      <p className='font-palanquin text-[1.4rem] font-semibold text-[#353434]'>Password</p>
        </div>
        <div className="">
          <p className='border-b-[3px] font-montserrat text-lg font-bold border-slate-500 cursor-pointer text-[#353434]'>EDIT PASSWORD</p>
        </div>
        </div>
        </div>
        <div className="flex gap-3">
         <p className='font-montserrat text-lg font-semibold mt-6'>Password </p>
         <div className="flex gap-1 justify-center items-center mt-6">
          <FaCircle size="8px" />
          <FaCircle size=" 8px" />
          <FaCircle size=" 8px" />
          <FaCircle size=" 8px" />
          <FaCircle size=" 8px" />
          <FaCircle size=" 8px" />
          <FaCircle size=" 8px" />
          <FaCircle size=" 8px" />
          <FaCircle size=" 8px" />
         </div>
         </div>
         </div>
         <div className="w-1/2 max-sm:w-full mt-14">
          <div className='flex justify-between border-slate-300 border-b-2'>
            <div className="flex gap-3 mb-6">
              <div className="flex items-center justify-center w-11">
            <IconContext.Provider value={{ style: { backgroundColor: 'white', color: '#353434' } }}>
        <FaBook size="2rem" />
      </IconContext.Provider> 
      </div>
      <p className='font-palanquin text-[1.4rem] font-semibold text-[#353434]'>Address Book</p>
        </div>
        <div className="">
          <p className='border-b-[3px] font-montserrat text-lg font-bold border-slate-500 cursor-pointer text-[#353434]'></p>
        </div>
        </div>
        <button className='bg-coral-red px-9 py-4 font-montserrat font-bold text-[1rem] mt-7 hover:bg-red-400'>
          ADD NEW
        </button>
         </div>
         </div>
    </section>
  )
}

export default DashBoard
