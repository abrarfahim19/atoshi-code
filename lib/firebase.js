import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRHlzWsQNcfvJCdzvpkM0IarybW2NbvEs",
  authDomain: "atoshi-code.firebaseapp.com",
  projectId: "atoshi-code",
  storageBucket: "atoshi-code.appspot.com",
  messagingSenderId: "740901341446",
  appId: "1:740901341446:web:7369ea22f36b017ec8f687",
};

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
