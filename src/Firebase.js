
 import  firebase  from  "firebase/compat/app";
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYHwjlPloU9brDx5BUzRYOnbmzg9iw2is",
    authDomain: "primeclone-475e8.firebaseapp.com",
    projectId: "primeclone-475e8",
    storageBucket: "primeclone-475e8.appspot.com",
    messagingSenderId: "1042124094417",
    appId: "1:1042124094417:web:c5b6143c46b83f160d7ef0",
    measurementId: "G-SSEWEX2DVN"
  };

//  Use this to initialize the firebase App 

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// use  this for db & auth 

  const db   = firebaseApp.firestore();
  const auth = firebase.auth();

  export  { db , auth };