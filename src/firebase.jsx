// Import individual services from Firebase
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhsr1rXLWTV-3rWEyIy3QymDB028KQQ8",
  authDomain: "gleen-ginine.firebaseapp.com",
  projectId: "gleen-ginine",
  storageBucket: "gleen-ginine.firebasestorage.app",
  messagingSenderId: "1014141427495",
  appId: "1:1014141427495:web:06710cbee0b0387d0b1302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };