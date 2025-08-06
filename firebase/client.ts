// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHZCic5oMYBhg_IdWgW32uJjNvg7e-C9Q",
  authDomain: "prepwise-5e2f5.firebaseapp.com",
  projectId: "prepwise-5e2f5",
  storageBucket: "prepwise-5e2f5.firebasestorage.app",
  messagingSenderId: "384738717077",
  appId: "1:384738717077:web:c678006e2e1e0de9f69a9c",
  measurementId: "G-5XNFT42XDP"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
