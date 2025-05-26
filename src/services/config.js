import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiXUIasDRKraVxe-8dB8UHJKoItABJM9E",
  authDomain: "finalblas-75910.firebaseapp.com",
  projectId: "finalblas-75910",
  storageBucket: "finalblas-75910.firebasestorage.app",
  messagingSenderId: "599421696672",
  appId: "1:599421696672:web:42492b7252f97d07f2e7c5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

