
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA4SLkR7q6Jgs_zvh8gHCzBB-gBjcsndyo",
  authDomain: "e-clone-9cf1f.firebaseapp.com",
  databaseURL: "https://e-clone-9cf1f.firebaseio.com",
  projectId: "e-clone-9cf1f",
  storageBucket: "e-clone-9cf1f.appspot.com",
  messagingSenderId: "993451660973",
  appId: "1:993451660973:web:0c2758e4a30f02875a5824",
  measurementId: "G-2Z04SSMVNC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export {auth}