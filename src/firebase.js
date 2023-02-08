import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlL7NnpB8JUjZxEBzDHIVyzf_bWh7NkAk",
  authDomain: "mail-clone-bf876.firebaseapp.com",
  projectId: "mail-clone-bf876",
  storageBucket: "mail-clone-bf876.appspot.com",
  messagingSenderId: "171519035421",
  appId: "1:171519035421:web:179de0269850890b8b5ef4",
  measurementId: "G-Z6HF8KP27W"
};  

const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db
