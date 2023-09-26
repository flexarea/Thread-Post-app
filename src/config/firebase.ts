// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtCTL0a0oBpMC4C02YfCPJRridDCcaAwY",
  authDomain: "react-app-ef4cc.firebaseapp.com",
  projectId: "react-app-ef4cc",
  storageBucket: "react-app-ef4cc.appspot.com",
  messagingSenderId: "836395136208",
  appId: "1:836395136208:web:7ed308c7c4aa0d7c08dad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
