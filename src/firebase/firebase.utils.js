import firebase from 'firebase/app';

import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC6iJ2VRniavb3nAaHpDn5ry4TIlyKXA88',
  authDomain: 'crwn-db-2021.firebaseapp.com',
  projectId: 'crwn-db-2021',
  storageBucket: 'crwn-db-2021.appspot.com',
  messagingSenderId: '631819348929',
  appId: '1:631819348929:web:e73cfc910ec3b1a578dd40',
  measurementId: 'G-1MQ3EHB5PM',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
