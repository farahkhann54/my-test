// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS3dwPgeYY4kMy3NcDl6sXdtY5RiO-6Cg",
  authDomain: "final-dd19a.firebaseapp.com",
  projectId: "final-dd19a",
  storageBucket: "final-dd19a.firebasestorage.app",
  messagingSenderId: "380120149810",
  appId: "1:380120149810:web:61ca668262221b1ae8f12b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);