import React, { useEffect, useState } from 'react'
import { useAuth } from "../AuthContext"
import { Button } from "@mui/material/"
import { useRouter } from "next/router"
import { db } from '../firebaseSetup'
import { getDoc, doc } from "firebase/firestore"


// get user details before rendering page
export const getServerSideProps = async () => {
    const x = await getDoc(doc(db, "users_details", "oj1GNyYPIDgSQYlAeslN"));

    return {
        props: { data: x.data() }
    }
}

function Dashboard({ data }) {
    const { currentUser, logout } = useAuth();
    const [loading, setloading] = useState(false);
    const router = useRouter();

    // redirect to login page if not logged in
    useEffect(() => {
        if (!currentUser) {
            router.push("/login")
        }
        else {
            setloading(true);
        }
    })


    return (
        <>
            {loading &&
                <>
                    <Button variant="contained" onClick={logout}>Wyloguj</Button>
                    <div>XD</div>
                </>
            }
        </>
    )
}

export default Dashboard