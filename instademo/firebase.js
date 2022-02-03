// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJN99jqa-_c1N2qXaviDNl6bWfHHvagSM",
  authDomain: "demoinsta-e1ce6.firebaseapp.com",
  projectId: "demoinsta-e1ce6",
  storageBucket: "demoinsta-e1ce6.appspot.com",
  messagingSenderId: "747376644200",
  appId: "1:747376644200:web:710513bc7c49d9ce706bdd"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db= getFirestore();
const storage =getStorage();

export {app, db, storage}