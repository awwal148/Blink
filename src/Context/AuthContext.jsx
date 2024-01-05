import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from "../firebase-config";
import db from "../firebase-config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const createUser = async (email, password, firstName, lastName) => {
    try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    // Update user profile with first name and last name
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });


    // Store additional user information in Firestore
      await db.collection('users').doc(user.uid).set({
        firstName,
        lastName,
        email,
      });

  } catch (error) {
      // console.error('Error signing up:', error.message);
    }
}
const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      // setLoading(false);
    } catch (error) {
      // setError(error.message);
      // setLoading(false);
      alert(error)
    }
  };

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    // console.log(currentUser)
    setUser(currentUser);
  });
 
  // Clean up the subscription when the component unmounts
  return () => unsubscribe();
}, []);

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password )

  }

  return (
    <AuthContext.Provider value={{createUser, signIn, user, resetPassword}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthFilter = () => {
  return useContext(AuthContext);
};

