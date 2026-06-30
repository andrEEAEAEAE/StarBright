import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrCINHG5jqKxEDNCeMyi1LM0C62B6aqJI",
  authDomain: "tutoria-web-1b591.firebaseapp.com",
  projectId: "tutoria-web-1b591",
  storageBucket: "tutoria-web-1b591.firebasestorage.app",
  messagingSenderId: "106539273717",
  appId: "1:106539273717:web:0f47369aa4312be6e664bc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);