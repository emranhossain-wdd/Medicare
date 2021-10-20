import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const signInWithGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLoading(false));
    }

    // it keeps all user changes sync
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [auth])

    const handleEmailValue = e => {
        setEmail(e.target.value);
    }

    const handlePasswordValue = e => {
        setPassword(e.target.value);
    }

    // email and password registration handle
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be at least 6 character long')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                setError('');
            })
            .catch(error => {
                setError(error.massage)
            })
    }

    // email and password sign in handle
    const handleSignIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

            })
    }

    return {
        user,
        isLoading,
        signInWithGoogle,
        handleEmailValue,
        handlePasswordValue,
        error,
        handleRegistration,
        handleSignIn,
        logOut

    }
}

export default useFirebase;