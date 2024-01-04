import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgfvJtA6mn0AGdko6rx794FQr9EP1y9O8",
  authDomain: "olx-clone-786ab.firebaseapp.com",
  projectId: "olx-clone-786ab",
  storageBucket: "olx-clone-786ab.appspot.com",
  messagingSenderId: "802078788604",
  appId: "1:802078788604:web:19c58ae8e20bfdd54b0079",
  measurementId: "G-PZD7T0FHG9"
};


  export default firebase.initializeApp(firebaseConfig)