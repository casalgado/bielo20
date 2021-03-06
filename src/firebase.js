import firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "bielo20.firebaseapp.com",
  databaseURL: "https://bielo20.firebaseio.com",
  projectId: "bielo20",
  storageBucket: "bielo20.appspot.com",
  messagingSenderId: "1034512020286",
  appId: "1:1034512020286:web:215f26d634bfe5add3b26f",
  measurementId: "G-B9NHTS9WDR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export { firebase };
