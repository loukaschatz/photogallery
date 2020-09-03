import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDiUSLLZscZtUj524ckU0oxqxNCyb0nTK0",
    authDomain: "photogallery-4638b.firebaseapp.com",
    databaseURL: "https://photogallery-4638b.firebaseio.com",
    projectId: "photogallery-4638b",
    storageBucket: "photogallery-4638b.appspot.com",
    messagingSenderId: "1019073183615",
    appId: "1:1019073183615:web:6cc8f9f025fbc79391644a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const firestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { storage, firestore, timestamp };