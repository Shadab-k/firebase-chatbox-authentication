// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnnf0jRg6UlXyQ3RqaCx-0EEOqbGpGyGY",
  authDomain: "chat-box-fd37b.firebaseapp.com",
  databaseURL: "https://chat-box-fd37b-default-rtdb.firebaseio.com",
  projectId: "chat-box-fd37b",
  storageBucket: "chat-box-fd37b.appspot.com",
  messagingSenderId: "78203728881",
  appId: "1:78203728881:web:d38b181bb4d86e1f610a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app, auth}