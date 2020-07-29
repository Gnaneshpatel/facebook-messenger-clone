import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZuUwoTlBVpH-YrAgZaXUmXJjm6vQxiH8",
    authDomain: "facebook-messenger-clone-a38c7.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-a38c7.firebaseio.com",
    projectId: "facebook-messenger-clone-a38c7",
    storageBucket: "facebook-messenger-clone-a38c7.appspot.com",
    messagingSenderId: "499910841975",
    appId: "1:499910841975:web:ff3545d7fd6baaff475872",
    measurementId: "G-ECNGHCN8GB"
})

const db = firebase.firestore();

export default db;