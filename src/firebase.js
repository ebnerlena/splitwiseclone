import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

let databaseURL = 'https://full-stack-dev131122998877-default-rtdb.europe-west1.firebasedatabase.app';

if (process.env.NODE_ENV === 'development') {
  databaseURL = 'http://127.0.0.1:9000/?ns=full-stack-dev131122998877';
}

const firebaseConfig = {
  apiKey: 'AIzaSyDTxtcQbeEE_hq0hBuk1Q-Sia1ABllyhew',
  authDomain: 'full-stack-dev131122998877.firebaseapp.com',
  databaseURL,
  projectId: 'full-stack-dev131122998877',
  storageBucket: 'full-stack-dev131122998877.appspot.com',
  messagingSenderId: '20682123430',
  appId: '1:20682123430:web:2082260d7910cfc693ec67',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

if (process.env.NODE_ENV === 'development') {
  auth.useEmulator('http://localhost:9099');
  database.useEmulator('localhost', 9000);
}

export { firebase };
export default auth;
