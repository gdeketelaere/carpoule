// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB-Wq2JHiNuEZ5Xi-KfryPEYIv-Ji_t1mo',
  authDomain: 'carpoule-app.firebaseapp.com',
  projectId: 'carpoule-app',
  storageBucket: 'carpoule-app.appspot.com',
  messagingSenderId: '1078454320092',
  appId: '1:1078454320092:web:f35e08f0fe2ade3e706d19',
  measurementId: 'G-W73K172PC5'
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
//const analytics = getAnalytics(app);
