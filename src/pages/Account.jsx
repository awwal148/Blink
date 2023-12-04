// import React, { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// import { auth } from '../firebase-config'
// // import { AuthContext } from '../Context/AuthContext'
// import { useAuthFilter } from '../Context/AuthContext'
// import { useEffect } from 'react'

// const Account = () => {
//   const Navigate = useNavigate()
//   const { setTotalAuth } = useAuthFilter()

//   const [registerEmail, setRegisterEmail]  = useState('')
//   const [registerPassword, setRegisterPassword]  = useState('')
//   const [loginEmail, setLoginEmail]  = useState('')
//   const [loginPassword, setLoginPassword]  = useState('')
//   const [user, setUser] = useState({})

//   // const {dispatch} = useContext(AuthContext)
  
//  React.useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });
 
//   // Clean up the subscription when the component unmounts
//   return () => unsubscribe();
// }, []);

//  useEffect(() => {
//     setTotalAuth(user);
//   }, [setTotalAuth, user]);


//   const register = async () => {
//     try {
//     const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
//     // dispatch({type: "LOGIN", payload:user})
//     // console.log(user)      
//     } catch (error) {
//       console.log(error.message)
//     }
//   }

//   const login = async () => {
//     try {
//     const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//     // dispatch({type: "LOGIN", payload:user})
//     Navigate("/")
//     // console.log(user)

      
//     } catch (error) {
//       console.log(error.message)
//     }
//   }

//   // useEffect (() => {
//   //   setTotalAuth(user);
//   //   console.log(user)
//   // },[setTotalAuth])

//   const logOut = async () => {
//     await signOut(auth)
//   }

//   return (
//     <section className='padding max-container pt-11'>
//         <h1 className='font-bold text-[3rem]'>My account </h1>
//         <div>
//           <input type='email' placeholder='Email...' onChange={(event) => setRegisterEmail(event.target.value)} />
//           <input placeholder='enter your password'  onChange={(event) => setRegisterPassword(event.target.value)} />

//           <button onClick={register}>Create user</button>
//         </div>
//         <div className="">
//            <input type='email' placeholder='Email...' onChange={(event) => setLoginEmail(event.target.value)} />
//           <input placeholder='enter your password' onChange={(event) => setLoginPassword(event.target.value)}  />

//           <button onClick={login}>Login</button>
//         </div>
//         <h4>user signed in: {user?.email}</h4>
//         <button onClick={logOut}>log out </button>
//     </section>
//   )
// }

// export default Account


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useAuthFilter } from '../Context/AuthContext';

const Account = () => {
  const Navigate = useNavigate();
  const { setTotalAuth } = useAuthFilter();

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setTotalAuth(user);
  }, [setTotalAuth, user]);

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      Navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const logOut = async () => {
    await signOut(auth);
    setTotalAuth(null)
  };

  return (
    <section className='padding max-container pt-11'>
      <h1 className='font-bold text-[3rem]'>My account </h1>
      <div>
        <input type='email' placeholder='Email...' onChange={(event) => setRegisterEmail(event.target.value)} />
        <input placeholder='enter your password' onChange={(event) => setRegisterPassword(event.target.value)} />

        <button onClick={register}>Create user</button>
      </div>
      <div className=''>
        <input type='email' placeholder='Email...' onChange={(event) => setLoginEmail(event.target.value)} />
        <input placeholder='enter your password' onChange={(event) => setLoginPassword(event.target.value)} />

        <button onClick={login}>Login</button>
      </div>
      <h4>user signed in: {user?.email}</h4>
      <button onClick={logOut}>log out </button>
    </section>
  );
};

export default Account;
