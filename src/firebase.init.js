// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import {getAuth} from"firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOPbLQejSHOfYzO2f6ekL8Z7RKeRBN6Ik",
  authDomain: "ema-john-simple-15eeb.firebaseapp.com",
  projectId: "ema-john-simple-15eeb",
  storageBucket: "ema-john-simple-15eeb.appspot.com",
  messagingSenderId: "1066607785487",
  appId: "1:1066607785487:web:476d673efe874ccfcdd57a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;