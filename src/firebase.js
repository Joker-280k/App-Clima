// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz9atkxk1QEPdpUNytQViKEmKsI5HZnzw",
  authDomain: "notificaciones-d5992.firebaseapp.com",
  projectId: "notificaciones-d5992",
  storageBucket: "notificaciones-d5992.appspot.com",
  messagingSenderId: "570974097862",
  appId: "1:570974097862:web:8c8a64662b85a1afc322c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);