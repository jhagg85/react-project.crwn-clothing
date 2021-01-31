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

  export const createUserProfileDocument = async (userAuth, additonalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot =  await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additonalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;