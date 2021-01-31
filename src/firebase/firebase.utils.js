import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpeLSoWb0zr49_5U58i8NRKLHwgqZ_0Ns",
    authDomain: "crwn-db-e1950.firebaseapp.com",
    projectId: "crwn-db-e1950",
    storageBucket: "crwn-db-e1950.appspot.com",
    messagingSenderId: "824611786041",
    appId: "1:824611786041:web:c24791091efe2a01b2ace8",
    measurementId: "G-2D16SHX0TH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;