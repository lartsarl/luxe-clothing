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

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {const newDocRef = collectionRef.doc(); batch.set(newDocRef, obj)});

    return await batch.commit();
  }

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return{
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;