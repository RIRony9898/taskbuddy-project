// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUc3vbnQt3F2JoyC3IXK7cM0zIWo4cntw",
  authDomain: "taskbuddy-project.firebaseapp.com",
  projectId: "taskbuddy-project",
  storageBucket: "taskbuddy-project.firebasestorage.app",
  messagingSenderId: "1042266098677",
  appId: "1:1042266098677:web:d1834495261ef7eacceebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);