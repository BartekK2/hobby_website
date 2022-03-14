import React, { useContext, useState, useEffect } from "react"

import { doc, setDoc, } from "firebase/firestore"
import { db } from '../firebaseSetup'
import { useAuth } from '../contexts/AuthContext'

const RegisterContext = React.createContext()

export function useRegisterContext() {
    return useContext(RegisterContext)
}

function RegisterProvider({ children }) {
    //email and password is shared for login and registration
    const [data, setData] = useState({ email: "", password: "", password2: "", imie: "", nazwisko: "", hobby: [], nick: "", profileStep: 0 });
    const { login, signup, currentUser } = useAuth();


    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    async function handleRegister(e) {
        e.preventDefault();
        setLoading(true)

        if (data["password"] != data["password2"]) {
            setError("Passwords didn't match")
        }
        else {
            try {
                await signup(data["email"], data["password"])

                //adding document with user details
                const docRef = doc(db, "users_details", data["email"]);
                await setDoc(docRef, {
                    imie: data["imie"],
                    nazwisko: data["nazwisko"],
                    nick: data["nick"],
                });

            } catch (e) {
                setError({
                    "auth/invalid-email": "Invalid email passed.",
                    "auth/email-already-in-use": "Email already in use.",
                    "auth/weak-password": "Your password is too short",
                }[e.code])
                if (error == undefined)
                    setError("Not known error happend")
            }
        }
        setLoading(false);
    };


    async function handleLogin(e) {
        e.preventDefault()
        setLoading(true)
        try {
            await login(data["email"], data["password"])
        } catch (e) {
            setError({
                "auth/wrong-password": "Wrong password",
                "auth/user-not-found": "User doesn't exist",
                "auth/invalid-email": "Invalid email entered.",
                //dodaj reszte ...
            }[e.code])
            console.log(e.code, e);
            if (error == undefined)
                setError("Not known error happend")
        }
        console.log(error);
        setLoading(false)

    };

    const hobbys = [
        'Piłka nożna',
        'Siatkówka',
        'Koszykówka',
        'Bieganie',
        'Sztuki walki',
        'Boks',
        'Szachy',
        'Gry komputerowe',
        'Netflix',
        'Coś tam',
    ];

    const value = {
        data,
        setData,
        handleChange,
        handleRegister,
        handleLogin,
        hobbys,
        loading,
        setLoading,
        error,
        setError
    }

    return (
        <RegisterContext.Provider value={value}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterProvider
