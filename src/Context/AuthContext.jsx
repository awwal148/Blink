import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
//  import { getFirestore } from 'firebase/firestore';
import { auth, db } from "../firebase-config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const createUser = (email, password,) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser)
    setUser(currentUser);
  });
 
  // Clean up the subscription when the component unmounts
  return () => unsubscribe();
}, []);

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password )

  }

  return (
    <AuthContext.Provider value={{createUser, signIn, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthFilter = () => {
  return useContext(AuthContext);
};

