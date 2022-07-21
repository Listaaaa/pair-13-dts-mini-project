import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "pair-13-dts-mini-project.firebaseapp.com",
  projectId: "pair-13-dts-mini-project",
  storageBucket: "pair-13-dts-mini-project.appspot.com",
  messagingSenderId: "176653657376",
  appId: "1:176653657376:web:5df5dde5defd7aaad36345",
  measurementId: "G-550FW593PY"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };