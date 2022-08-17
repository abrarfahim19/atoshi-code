import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import { getFirestore, limit } from "firebase/firestore";
import "firebase/storage";
import { getStorage } from "firebase/storage";
import { getDocs, collection, where, query } from "firebase/firestore";

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

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = collection(firestore, "users");
  const q = query(usersRef, where("username", "==", username), limit(1));
  const userDoc = (await getDocs(q)).docs[0];
  console.log(userDoc);
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
