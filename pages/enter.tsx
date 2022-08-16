import { signInWithPopup, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import {auth, googleAuthProvider} from '../lib/firebase';

const Enter = () => {
    const {user,username } = useContext(UserContext)
    return (
        <main>
            {user?
                !username ? <UsernameForm/>:<SignOutButton/> 
                :
                <SignInButton/>
            }
        </main>
    );
};

export default Enter;

const SignInButton = () => {
    const signInWithGoogle = async () =>  {
        await signInWithPopup(auth,googleAuthProvider)
    }
    return (
        <>
            <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'} width="30px" /> Sign in with Google
            </button>
        </>
    )
};

const SignOutButton = () => {
    return (
         <button onClick={() => signOut(auth)}>Sign Out</button>
    )
};

const UsernameForm = () => {
    return (
        <h3>Let`s see</h3>
    )
};