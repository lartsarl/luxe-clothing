import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD1c4N31EkAEieAhW2HT8RaKqmZxk1in_o",
    authDomain: "luxe-clothing.firebaseapp.com",
    databaseURL: "https://luxe-clothing.firebaseio.com",
    projectId: "luxe-clothing",
    storageBucket: "luxe-clothing.appspot.com",
    messagingSenderId: "762999219817",
    appId: "1:762999219817:web:8d81859dcc80998775e4f8",
    measurementId: "G-G8R3P2MFCN"
  };

  export const CreateUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
      return;
    }

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try{
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      } catch(error){
          console.log('Error creating user: ' + error.message)
      }
    }

    return userRef;
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SingInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;