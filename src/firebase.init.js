// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9N6cM1erlZd0yuiCQp7EJ1EKUgwOc8ys",
  authDomain: "ema-john-simple-127e2.firebaseapp.com",
  projectId: "ema-john-simple-127e2",
  storageBucket: "ema-john-simple-127e2.appspot.com",
  messagingSenderId: "61511777308",
  appId: "1:61511777308:web:6e20b6b53b63575960f3d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;