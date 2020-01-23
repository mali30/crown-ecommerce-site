import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBJQ-MvvDzj7odpsHiAgIGZ_Cxj7GbUlbI",
    authDomain: "crwn-clothing-backend.firebaseapp.com",
    databaseURL: "https://crwn-clothing-backend.firebaseio.com",
    projectId: "crwn-clothing-backend",
    storageBucket: "crwn-clothing-backend.appspot.com",
    messagingSenderId: "700383786711",
    appId: "1:700383786711:web:f768fcb9b92003aada2292",
    measurementId: "G-XMNLWSED68"
};
  
// initialize firebase
firebase.initializeApp(config)

// authentication
export const auth = firebase.auth();
// firestore
export const firestore = firebase.firestore();

// triggers google pop up
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;