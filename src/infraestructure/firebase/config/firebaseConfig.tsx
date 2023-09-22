// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH_M8SEZo8lDvR1FUguXpXl2fEi2qX0ww",
  authDomain: "viteapp-78839.firebaseapp.com",
  projectId: "viteapp-78839",
  storageBucket: "viteapp-78839.appspot.com",
  messagingSenderId: "12289734510",
  appId: "1:12289734510:web:8de8b994bacdbb7ec2b37f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore 
export const db = getFirestore(app);



