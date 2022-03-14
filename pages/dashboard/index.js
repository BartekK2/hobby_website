import React, { useEffect, useState } from 'react'
import Navigation from "../../components/Navigation"
import { useAuth } from '../../contexts/AuthContext'
import { Button } from "@mui/material/"
import { useRouter } from "next/router"
import { db } from '../../firebaseSetup'
import { getDoc, doc } from "firebase/firestore"

function Dashboard({ Component }) {
    const { currentUser, logout } = useAuth();
    const [loading, setloading] = useState(true);
    const [data, setData] = useState({});
    const router = useRouter();

    // redirect to login page if not logged in
    useEffect(() => {
        if (!currentUser) {
            router.push("/login")
        }
        console.log(Component);
    }, [currentUser])

    useEffect(async () => {
        async function fetchData() {
            //prefetch data
            const x = await getDoc(doc(db, "users_details", currentUser.email));
            if (x.exists()) {
                setData(x.data());
                setloading(false);
            } else {
                router.push("/profile")
            }
        }

        if (currentUser)
            fetchData()
    }, [])

    return (
        <div style={{ display: "flex", padding: "20px", height: "100vh", width: "100vw", overflow: "hidden" }}>
            {loading ||
                <>
                    <Navigation />
                    <div style={{ height: "100%", marginLeft: "-50px", padding: "20px 20px 20px 70px", width: "-webkit-fill-available", zIndex: -1, background: " #dbdbdb", borderRadius: "20px" }}>
                        <h4>Witaj {data.imie}</h4>

                    </div>
                </>
            }
        </div>
    )
}

export default Dashboard