
import firebase from  "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBYHwjlPloU9brDx5BUzRYOnbmzg9iw2is",
    authDomain: "primeclone-475e8.firebaseapp.com",
    projectId: "primeclone-475e8",
    storageBucket: "primeclone-475e8.appspot.com",
    messagingSenderId: "1042124094417",
    appId: "1:1042124094417:web:c5b6143c46b83f160d7ef0",
    measurementId: "G-SSEWEX2DVN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export  { db , auth }