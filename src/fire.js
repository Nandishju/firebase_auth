import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDM_I1vHruQvzQU3SMCf6g9bjPBgUW8nsI",
    authDomain: "login-b8c58.firebaseapp.com",
    databaseURL: "https://login-b8c58.firebaseio.com",
    projectId: "login-b8c58",
    storageBucket: "login-b8c58.appspot.com",
    messagingSenderId: "439392857988",
    appId: "1:439392857988:web:e0f6f6ff62c9dad1e9b7d1"
  };
  const fire = firebase.initializeApp(firebaseConfig);


  export default fire;