import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRHlzWsQNcfvJCdzvpkM0IarybW2NbvEs",
  authDomain: "atoshi-code.firebaseapp.com",
  projectId: "atoshi-code",
  storageBucket: "atoshi-code.appspot.com",
  messagingSenderId: "740901341446",
  appId: "1:740901341446:web:7369ea22f36b017ec8f687",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
// Firestore exports
export const firestore = getFirestore(app);
export const storage = getStorage();
