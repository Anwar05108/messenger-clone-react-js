import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLjb0fOHHGOXcCk_PYncY5_vbkGe8m8eA",
  authDomain: "facebook-messenger-clone-6d8ba.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-6d8ba.firebaseio.com",
  projectId: "facebook-messenger-clone-6d8ba",
  storageBucket: "facebook-messenger-clone-6d8ba.appspot.com",
  messagingSenderId: "308136327379",
  appId: "1:308136327379:web:8e35e640405b16aa27fc26",
  measurementId: "G-2ZRJ3155V0",
});

const db = firebaseApp.firestore();

export default db;

// npm audit fix
