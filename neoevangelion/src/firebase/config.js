// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDIA_J9Pj7TGi9ACA4HcUkTZ6jrUK6wN-4",
  authDomain: "neoevangelion-ed403.firebaseapp.com",
  projectId: "neoevangelion-ed403",
  storageBucket: "neoevangelion-ed403.appspot.com",
  messagingSenderId: "34105061608",
  appId: "1:34105061608:web:5969e926a17b9c56cf195d",
  measurementId: "G-HJRM1Y06L2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export { db }