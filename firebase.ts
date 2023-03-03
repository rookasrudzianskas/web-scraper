// @ts-nocheck
import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-SzhlBkms-A5G2Eh79Wnw73bQLjHwVW8",
  authDomain: "rookas-big-dataa.firebaseapp.com",
  projectId: "rookas-big-dataa",
  storageBucket: "rookas-big-dataa.appspot.com",
  messagingSenderId: "958471251529",
  appId: "1:958471251529:web:7c637487d061b32c7c8198",
  measurementId: "G-7Z3YPDDR61"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
