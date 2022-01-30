
 import  firebase  from  "firebase/compat/app";
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';

 const firebaseConfig = {
  apiKey: "AIzaSyDsW1ouzlgqby0APBGverFWu8BTv8zBhr8",
  authDomain: "primeproejct.firebaseapp.com",
  projectId: "primeproejct",
  storageBucket: "primeproejct.appspot.com",
  messagingSenderId: "422707140795",
  appId: "1:422707140795:web:35e9c82fd6b3ad9150f19e",
  measurementId: "G-WNHKY2BFMT"
};

//  Use this to initialize the firebase App 

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// use  this for db & auth 

  const db   = firebaseApp.firestore();
  const auth = firebase.auth();

  export  { db , auth };