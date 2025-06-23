// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQZFxsaV8IGwu4H76QDTAadz2i42Q8ZPQ",
    authDomain: "thrive-3d.firebaseapp.com",
    projectId: "thrive-3d",
    storageBucket: "thrive-3d.firebasestorage.app",
    messagingSenderId: "682209492993",
    appId: "1:682209492993:web:f9f64ba41eec5cfdd24000",
    measurementId: "G-29T51WZG81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export async function getItems() {
    const querySnapshot = await getDocs(collection(db, 'items'))
    querySnapshot.forEach(doc => console.log(`${doc.id} => ${doc.data().nombre} - ${doc.data().precio}`))
}

