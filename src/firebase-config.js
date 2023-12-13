import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_BLINK_FIREBASE_KEY,
  authDomain: "blink-authentication.firebaseapp.com",
  projectId: "blink-authentication",
  storageBucket: "blink-authentication.appspot.com",
  messagingSenderId: "601215667113",
  appId: "1:601215667113:web:8150dd91ac269ca7a0d2b8",
  measurementId: "G-MXECYRMGSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
 const db = getFirestore(app);
 export default db