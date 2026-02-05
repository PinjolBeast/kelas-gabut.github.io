// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9PmWnCea0sYXAB9RRZ0KVkh-TxryKowA",
  authDomain: "tenzoska-moments.firebaseapp.com",
  databaseURL: "https://tenzoska-moments-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tenzoska-moments",
  storageBucket: "tenzoska-moments.firebasestorage.app",
  messagingSenderId: "837325675790",
  appId: "1:837325675790:web:15029054db81eeb05bcb5f",
  measurementId: "G-G6VVZXF9HJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.database();
const auth = firebase.auth();
