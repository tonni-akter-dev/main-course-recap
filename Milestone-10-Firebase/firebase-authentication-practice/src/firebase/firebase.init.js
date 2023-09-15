import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDORVsxiXe4eFbPZlD2AXojPr1nym55gic",
  authDomain: "fir-practice-reacap.firebaseapp.com",
  projectId: "fir-practice-reacap",
  storageBucket: "fir-practice-reacap.appspot.com",
  messagingSenderId: "1071190497004",
  appId: "1:1071190497004:web:6cf174f01fb24d4c3cf7c9",
  measurementId: "G-5T2CF2VB3L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
