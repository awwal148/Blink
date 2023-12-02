import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase-config'

const Account = () => {
  const [registerEmail, setRegisterEmail]  = useState('')
  const [registerPassword, setRegisterPassword]  = useState('')
  const [loginEmail, setLoginEmail]  = useState('')
  const [loginPassword, setLoginPassword]  = useState('')
  const [user, setUser] = useState({})
  
 React.useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // Clean up the subscription when the component unmounts
  return () => unsubscribe();
}, []);

  const register = async () => {
    try {
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    console.log(user)
      
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async () => {
    try {
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(user)
      
    } catch (error) {
      console.log(error.message)
    }
  }

  const logOut = async () => {
    await signOut(auth)
  }

  return (
    <section className='padding max-container pt-11'>
        <h1 className='font-bold text-[3rem]'>My account </h1>
        <div>
          <input placeholder='Email...' onChange={(event) => setRegisterEmail(event.target.value)} />
          <input placeholder='enter your password'  onChange={(event) => setRegisterPassword(event.target.value)} />

          <button onClick={register}>Create user</button>
        </div>
        <div className="">
           <input placeholder='Email...' onChange={(event) => setLoginEmail(event.target.value)} />
          <input placeholder='enter your password' onChange={(event) => setLoginPassword(event.target.value)}  />

          <button onClick={login}>Login</button>
        </div>
        <h4>user signed in: {user?.email}</h4>
        <button onClick={logOut}>log out </button>
    </section>
  )
}

export default Account