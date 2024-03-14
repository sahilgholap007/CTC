// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn78JupW9blZVpe2THdb5lrrjowP7KZvk",
  authDomain: "explorexperts-60cce.firebaseapp.com",
  projectId: "explorexperts-60cce",
  storageBucket: "explorexperts-60cce.appspot.com",
  messagingSenderId: "214416611438",
  appId: "1:214416611438:web:1c61a5bb0f1da09f74ee7f",
  measurementId: "G-QRX6TDPD24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default app;
export {db};