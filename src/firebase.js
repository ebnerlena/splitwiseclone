import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDTxtcQbeEE_hq0hBuk1Q-Sia1ABllyhew",
    authDomain: "full-stack-dev131122998877.firebaseapp.com",
    databaseURL: "https://full-stack-dev131122998877-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "full-stack-dev131122998877",
    storageBucket: "full-stack-dev131122998877.appspot.com",
    messagingSenderId: "20682123430",
    appId: "1:20682123430:web:2082260d7910cfc693ec67"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); 

if (process.env.NODE_ENV === 'development') {
  auth.useEmulator('http://localhost:9099')
}

export default auth;