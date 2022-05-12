import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCsI1Ecv852Asmt6k01tcXkdziAlvVho-8",
  authDomain: "e-ride-bf128.firebaseapp.com",
  databaseURL: "https://e-ride-bf128-default-rtdb.firebaseio.com",
  projectId: "e-ride-bf128",
  storageBucket: "e-ride-bf128.appspot.com",
  messagingSenderId: "1052973618535",
  appId: "1:1052973618535:web:9406047965c9b78a908bc2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
