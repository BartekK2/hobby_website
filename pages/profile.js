import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from "next/router"

function Profile() {
    const { logout, currentUser } = useAuth();
    const router = useRouter();


    useEffect(() => {
        if (!currentUser) {
            router.push("/login")
        }
    }, [currentUser])

    return (
        <div>
            <button onClick={logout}>wyloguj</button>
        </div>
    )
}

export default Profile