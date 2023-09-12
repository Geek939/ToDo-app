import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDiFvcdVNDWdbeSSj4ehg5IPUH8ZRakrR0",
  authDomain: "todo-d6c26.firebaseapp.com",
  projectId: "todo-d6c26",
  storageBucket: "todo-d6c26.appspot.com",
  messagingSenderId: "209299680689",
  appId: "1:209299680689:web:35aa43e32c1067d9d92190"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };