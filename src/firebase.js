// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPVMcQrQ8CKlJF50fHUF-zLUwpgXLn43k",
  authDomain: "feedback-collector-6f6ed.firebaseapp.com",
  projectId: "feedback-collector-6f6ed",
  storageBucket: "feedback-collector-6f6ed.firebasestorage.app",
  messagingSenderId: "555314340276",
  appId: "1:555314340276:web:d506712d481b594e8a12e1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, serverTimestamp };