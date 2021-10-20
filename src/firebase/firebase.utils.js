import firebase from "firebase/compat";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClL5C34tuL5q2WHQzhNdaKzhmcmGcM2Zs",
    authDomain: "crwn-db-80f56.firebaseapp.com",
    projectId: "crwn-db-80f56",
    storageBucket: "crwn-db-80f56.appspot.com",
    messagingSenderId: "783527737219",
    appId: "1:783527737219:web:0b32d675a43e37544668b6",
    measurementId: "G-7JTGJW0SLL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;