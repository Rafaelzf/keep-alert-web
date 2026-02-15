// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQd6MU7XxzjmKsYvPv3pkN9TxxlywzzLI",
  authDomain: "keep-alert-799b5.firebaseapp.com",
  projectId: "keep-alert-799b5",
  storageBucket: "keep-alert-799b5.firebasestorage.app",
  messagingSenderId: "807459450188",
  appId: "1:807459450188:web:763a45062db5de054273e9",
  measurementId: "G-JWJ21RD7MQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);