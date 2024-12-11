// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKcjkuME4eT0DhGRyJy_eOlfJFcvoXjyo",
  authDomain: "alxjobportal.firebaseapp.com",
  projectId: "alxjobportal",
  storageBucket: "alxjobportal.firebasestorage.app",
  messagingSenderId: "243640455949",
  appId: "1:243640455949:web:0cc49b1b6ac32574439644",
  measurementId: "G-639TG3LDLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const imageDb = getStorage(app)