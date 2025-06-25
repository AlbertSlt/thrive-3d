// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeAQqqjwyqMws5hPRTOR8Byn46Pi7-w3Q",
  authDomain: "thrive-3d-9f993.firebaseapp.com",
  projectId: "thrive-3d-9f993",
  storageBucket: "thrive-3d-9f993.firebasestorage.app",
  messagingSenderId: "316414858095",
  appId: "1:316414858095:web:4c681319453d4722ad4e9a"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)