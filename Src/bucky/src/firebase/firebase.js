import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOd24noPxchfLSG5lay1dCCZMfJ_2cNv4",
  authDomain: "buckydb-4e626.firebaseapp.com",
  databaseURL: "https://buckydb-4e626.firebaseio.com",
  projectId: "buckydb-4e626",
  storageBucket: "buckydb-4e626.appspot.com",
  messagingSenderId: "1017650296184",
  appId: "1:1017650296184:web:2896ea133a3f27509f448d",
  measurementId: "G-D32ZJ72QFR"
};

const myFirebase = firebase.initializeApp(firebaseConfig);

export default myFirebase;