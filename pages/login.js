import React, { useState, useEffect } from 'react'
import {
    TextField, Button, ButtonGroup, Alert,
    Accordion, AccordionSummary, AccordionDetails, Select
} from "@mui/material/"
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'
import MultipleSelectChip from '../components/MultipleSelect'
import RegisterProvider from '../contexts/RegisterContext'
import LoginComponent from '../components/LoginComponent'

function Login() {
    // Firebase
    const { currentUser } = useAuth();

    const [userloading, setuserloading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (currentUser)
            router.push("/dashboard")
        else {
            setuserloading(true);
        }
    }, [currentUser]);

    return (
        <>
            {userloading &&
                <RegisterProvider>
                    <LoginComponent />
                </RegisterProvider>
            }
        </>
    )
}

export default Login