// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiyHguRE5vq_yGi_ZIoE7SCH1HP-Ytwkk",
  authDomain: "proyectofinalfontana.firebaseapp.com",
  projectId: "proyectofinalfontana",
  storageBucket: "proyectofinalfontana.firebasestorage.app",
  messagingSenderId: "199790527640",
  appId: "1:199790527640:web:417525ea50c9a694bb7ced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)