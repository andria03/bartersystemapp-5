import firebase from 'firebase'
require ('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyA_ixez8YB1m56zXehysR4A9aPuffAjuwE",
  authDomain: "bartersystemapp-6e6ec.firebaseapp.com",
  databaseURL: "https://bartersystemapp-6e6ec.firebaseio.com",
  projectId: "bartersystemapp-6e6ec",
  storageBucket: "bartersystemapp-6e6ec.appspot.com",
  messagingSenderId: "787180058376",
  appId: "1:787180058376:web:18c8c7d96dcbe88e881ebd",
  measurementId: "G-R99SW1H4BW"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()