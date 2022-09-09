// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/firebase-auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaEcygZWZpj-dx0Cm0ysRL5Ni4XR9aeuk",
  authDomain: "blog-a8148.firebaseapp.com",
  projectId: "blog-a8148",
  storageBucket: "blog-a8148.appspot.com",
  messagingSenderId: "37485517992",
  appId: "1:37485517992:web:e8f2dff806616c829a769d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();