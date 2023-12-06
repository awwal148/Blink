import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
// import { AuthContext } from '../Context/AuthContext'
import { useAuthFilter } from '../Context/AuthContext'
import Tabs from '../AcountTab/Tab'


const Account = () => {
  const { user } = useAuthFilter()

  const logOut = async () => {
    await signOut(auth)
  }

  return (
    <section className='padding max-container pt-11'>
        <h1 className='font-bold text-[3rem]'>My account </h1>
      <div className="w-[45%] mx-auto">
        
        <h4>user signed in: {user?.email}</h4>
        <button onClick={logOut}>log out </button>

        <Tabs />
        </div>
    </section>
  )
}

export default Account


