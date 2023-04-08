import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.PUBLIC_apiKey,
  authDomain: process.env.PUBLIC_authDomain,
  projectId: process.env.PUBLIC_projectId,
  storageBucket: process.env.PUBLIC_storageBucket,
  messagingSenderId: process.env.PUBLIC_messagingSenderId,
  appId: process.env.PUBLIC_appId,
  measurementId: process.env.PUBLIC_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
