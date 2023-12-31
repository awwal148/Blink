import React from 'react'
import { Navigate} from 'react-router-dom'
import { useAuthFilter } from '../Context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthFilter();
  console.log('totalAuth', user);

  if (!user) {
   // Modify the condition to check if the user is authenticated based on your user object structure
     return <Navigate to="/account" />;
  }

  return children;
};


export default ProtectedRoute