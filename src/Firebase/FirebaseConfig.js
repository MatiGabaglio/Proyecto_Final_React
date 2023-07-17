import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIMoq981OOemP-7sUeAtbGfB-obX6IMzo",
  authDomain: "proyecto-final-reat.firebaseapp.com",
  projectId: "proyecto-final-reat",
  storageBucket: "proyecto-final-reat.appspot.com",
  messagingSenderId: "160966835439",
  appId: "1:160966835439:web:a752dc8a498dfbce8bef1a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 