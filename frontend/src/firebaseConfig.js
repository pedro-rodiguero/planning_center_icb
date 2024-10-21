// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbXCWP1KDriC7i9WjIWw4Oa5g6jUGjVIQ",
  authDomain: "icb-planning-center.firebaseapp.com",
  projectId: "icb-planning-center",
  storageBucket: "icb-planning-center.appspot.com",
  messagingSenderId: "225388937384",
  appId: "1:225388937384:web:fc0bb83057fb59ca55c29d",
  measurementId: "G-Y17M4GMBB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };