import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "list-ts-747d7",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};
// console.log(process.env.FIREBASE_PROJECT_ID)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app.name)
const db = getFirestore(app);

export { db }