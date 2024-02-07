import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration object containing credentials
const firebaseConfig = {
  apiKey: "AIzaSyCD_nmcTf1ui3gMlhQPF0Ijd8qBP0DzpBI",
  authDomain: "auth-demo-5a6bd.firebaseapp.com",
  projectId: "auth-demo-5a6bd",
  storageBucket: "auth-demo-5a6bd.appspot.com",
  messagingSenderId: "5058434932",
  appId: "1:5058434932:web:94767e57244ff42a4afe21"
};

// Initialize Firebase app with provided configuration
const app = initializeApp(firebaseConfig);
// Get authentication instance using initialized Firebase app
export const auth = getAuth(app);