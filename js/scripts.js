// Initialize Firebase
var config = {
  apiKey: "AIzaSyBUe63zQzClJ13ruACdBKSDwbn3HPS1qok",
  authDomain: "muskify.firebaseapp.com",
  databaseURL: "https://muskify.firebaseio.com",
  projectId: "muskify",
  storageBucket: "muskify.appspot.com",
  messagingSenderId: "264337714263"
};
firebase.initializeApp(config);

var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => bigOne.innerText = snap.val());
