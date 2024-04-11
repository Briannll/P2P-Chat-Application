// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA20w4_Iuq0AZ8_8In4PoVBpprAtpRbg6k",
  authDomain: "react-chat-app-16a75.firebaseapp.com",
  projectId: "react-chat-app-16a75",
  storageBucket: "react-chat-app-16a75.appspot.com",
  messagingSenderId: "215953848077",
  appId: "1:215953848077:web:9956cb6d4721c67fbca244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const db = getFirestore(app)