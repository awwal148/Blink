import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
// import { AuthContext } from '../Context/AuthContext'
import { useAuthFilter } from '../Context/AuthContext'
import Tabs from '../AcountTab/Tab'


const Account = () => {
  return (
    <section className='padding max-container'>
        <h1 className='font-bold text-[3rem] mt-14'>My account </h1>
      <div className="w-[45%] mx-auto max-sm:w-full">
        <Tabs />
        </div>
    </section>
  )
}

export default Account


