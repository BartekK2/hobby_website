import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebaseSetup"
import {
    onAuthStateChanged, signOut,
    signInWithEmailAndPassword, createUserWithEmailAndPassword,
    setPersistence, browserLocalPersistence, browserSessionPersistence,
    GoogleAuthProvider, signInWithPopup, signInWithRedirect, FacebookAuthProvider,
} from "firebase/auth";
// import { collection, getDocs, getDoc, query, where, addDoc } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function setAuthPersistence(local) {
        local ? setPersistence(auth, browserLocalPersistence) : setPersistence(auth, browserSessionPersistence);
    }

    function getPersistence() {
        return auth.persistenceManager.persistence.type;
    }

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function googleSignInWithPopUp() {
        signInWithPopup(auth, googleProvider);
    }

    function googleSignInWithRedirect() {
        signInWithRedirect(auth, googleProvider);
    }

    function facebookSignInWithPopUp() {
        signInWithPopup(auth, facebookProvider);
    }

    function facebookSignInWithRedirect() {
        signInWithRedirect(auth, facebookProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        setAuthPersistence,
        getPersistence,
        googleSignInWithPopUp,
        googleSignInWithRedirect,
        facebookSignInWithPopUp,
        facebookSignInWithRedirect
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;