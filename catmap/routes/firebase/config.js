// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyCxsKPouaoVNmLqHwx8Bw5RLng3IDqB9lM",
    authDomain: "dcu-cat.firebaseapp.com",
    projectId: "dcu-cat",
    storageBucket: "dcu-cat.appspot.com",
    messagingSenderId: "613584095229",
    appId: "1:613584095229:web:8814a8b935d17415fefb94",
    measurementId: "G-3DTWJ4LM4D"
};
firebase.initializeApp(firebaseConfig)
let database = firebase.database();

module.exports = database;