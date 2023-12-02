import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8M9Cr2DKh_dqRL3VZdxW_VpVsEmXVFMw",
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