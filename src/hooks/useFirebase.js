import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const auth = getAuth();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            console.error("password must need to be at leaset 6 characters");
            return;
        } else {
            setPassword(e.target.value);
        }
    };


    const loginHandle = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { email, displayName } = result.user
                const userInfo = {
                    name: displayName,
                    email: email,
                };
                setUser(userInfo)
                setError("");

            })
            .catch(error => {
                setError(error.message);
            })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    console.log(user);
    return {
        user,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        loginHandle,
    }
}

export default useFirebase;