const firebaseDB = require('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyCNu3RDTdDYb-nfGIbk2TjYuRaZST4h76A",
    authDomain: "achiko-be.firebaseapp.com",
    projectId: "achiko-be",
    storageBucket: "achiko-be.appspot.com",
    messagingSenderId: "470491698208",
    appId: "1:470491698208:web:c68c99a9da63fed302d845"
};
// Initialize Firebase
firebaseDB.initializeApp(firebaseConfig);



module.exports = firebaseDB