import firebase from "firebase/app";
import "firebase/auth";

 export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyCw6JtT-nl0SfSU2WjcRZxlHCQ294ooPz4",
    authDomain: "bizchat-157cd.firebaseapp.com",
    databaseURL: "https://bizchat-157cd-default-rtdb.firebaseio.com",
    projectId: "bizchat-157cd",
    storageBucket: "bizchat-157cd.appspot.com",
    messagingSenderId: "456040397461",
    appId: "1:456040397461:web:3e64aa9f726fe852ccb99c",
    measurementId: "G-YKH9CP4MNR"
  }).auth()