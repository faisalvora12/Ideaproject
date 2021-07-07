// For Firebase JS SDK v7.20.0 and later, measurementId is optional

 import firebase from "firebase";

 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtbz-oEcmiz9WhV5-wXjwSMyYmr5eIHvs",
    authDomain: "ideaproject-bde8f.firebaseapp.com",
    databaseURL: "https://ideaproject-bde8f-default-rtdb.firebaseio.com",
    projectId: "ideaproject-bde8f",
    storageBucket: "ideaproject-bde8f.appspot.com",
    messagingSenderId: "988422221339",
    appId: "1:988422221339:web:d8f35e0bf5fd4e05e9d2be",
    measurementId: "G-W265BGW95R"
 });

 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();

 export {db,auth,storage};