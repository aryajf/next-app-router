// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZHjebfroX_Kp4CmBu-R6jWQXMVZOt5nk",
  authDomain: "belajar-next-app.firebaseapp.com",
  projectId: "belajar-next-app",
  storageBucket: "belajar-next-app.appspot.com",
  messagingSenderId: "724997754035",
  appId: "1:724997754035:web:e79851f2c7d3b312ceb4c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app