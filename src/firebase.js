// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMLdHQHuy0wbmyMFRN1I2OkHDOC_YvSWg",
  authDomain: "any-store-c6a08.firebaseapp.com",
  projectId: "any-store-c6a08",
  storageBucket: "any-store-c6a08.appspot.com",
  messagingSenderId: "96913266498",
  appId: "1:96913266498:web:58ad8b27820ac7be82dadb",
  measurementId: "G-KJMJVTGGPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider()