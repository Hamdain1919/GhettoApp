// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU2e4gdytCx0AbjKhPtru6WUrS0XEdTGE",
  authDomain: "ghettoproject-1256b.firebaseapp.com",
  projectId: "ghettoproject-1256b",
  storageBucket: "ghettoproject-1256b.appspot.com",
  messagingSenderId: "98702503384",
  appId: "1:98702503384:web:0ccd226cd6e2b2c61d96ad",
  measurementId: "G-9PCZH0Q2MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)