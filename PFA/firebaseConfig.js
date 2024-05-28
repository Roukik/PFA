// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA0QuJuCyI2CwYfWy-i7QcVSAdcYoZyEpc",
  authDomain: "login-pfa.firebaseapp.com",
  projectId: "login-pfa",
  storageBucket: "login-pfa.appspot.com",
  messagingSenderId: "19481942966",
  appId: "1:19481942966:web:b848a17c2d5f5057283f17"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
