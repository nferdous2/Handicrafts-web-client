import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    //Registration part handle
    const handleRegister = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { }).catch((error) => {
                    });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
    }
    //log in handle
    const loginHandle = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
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

    useEffect(() => {
        fetch(`https://handicrafts-web-server.onrender.com/users${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    //log out button
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://handicrafts-web-server.onrender.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        handleRegister,
        logOut,
        error,
        loginHandle,
    }
}

export default useFirebase;