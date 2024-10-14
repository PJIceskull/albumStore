// Import
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";

// Variables
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
