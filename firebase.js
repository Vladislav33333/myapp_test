// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9vmqQ8FynjaykKTp8J5vhWuXGsfFo0as",
  authDomain: "myapp-test-18941.firebaseapp.com",
  databaseURL:
    "https://myapp-test-18941-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "myapp-test-18941",
  storageBucket: "myapp-test-18941.firebasestorage.app",
  messagingSenderId: "381911016868",
  appId: "1:381911016868:web:57ab5dd3667713973bcd31",
  measurementId: "G-LF63XZYWF7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
export { db };
