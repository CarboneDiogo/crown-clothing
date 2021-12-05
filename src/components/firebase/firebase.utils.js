import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {  
  apiKey: "AIzaSyAMkjaakoG54bb8-sYXqXh9g4pfocnJcTY",
  authDomain: "crown-db-a2b58.firebaseapp.com",
  projectId: "crown-db-a2b58",
  storageBucket: "crown-db-a2b58.appspot.com",
  messagingSenderId: "872727443283",
  appId: "1:872727443283:web:9656e1f17c9ce467c193a6",
  measurementId: "G-EHLCS6JE4S"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

