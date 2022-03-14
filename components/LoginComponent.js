import React, { useState, useEffect } from 'react'
import {
    TextField, Button, ButtonGroup, Alert,
    Accordion, AccordionSummary, AccordionDetails, Select
} from "@mui/material/"
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'
import MultipleSelectChip from './MultipleSelect'
import { useRegisterContext } from '../contexts/RegisterContext'
import LoginForm from './login_register/LoginForm'
import RegisterForm from './login_register/RegisterForm'
import DetailsForm from './login_register/DetailsForm'
import PhotoForm from './login_register/PhotoForm'
import Stepper from '../components/Stepper'


function LoginComponent() {
    const [mode, setmode] = useState("login");
    const { handleChange, handleRegister, handleLogin,
        hobbys, loading, error, data } = useRegisterContext();
    const router = useRouter();
    const { urlmode } = router.query;

    // default mode passed from url parameters
    useEffect(() => {
        if (urlmode != "") {
            if ((urlmode == "login") || (urlmode == "registration"))
                setmode(urlmode);
        }
    }, [router, urlmode]);

    // changing form mode to login or registration
    const [accordion, setaccordion] = useState(true)
    const changemode = (changed_mode) => {
        if (changed_mode === mode) {
            setaccordion(false);
            const timeout = setTimeout(() => {
                setmode(mode === "login" ? "registration" : "login")
                setaccordion(true);
            }, 750);
        }
    };

    // function that hide accordion change step and show accordion
    const effectStep = (func) => {
        setaccordion(false);
        setTimeout(() => {
            func();
            setaccordion(true);
        }, 750);
    }

    return (
        <>
            <div style={{ display: 'flex', flex: '1 1 auto', height: "100vh", justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column', }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "20px" }}>
                    <ButtonGroup variant="contained">
                        <Button onClick={() => changemode("registration")}>
                            Login
                        </Button>
                        <Button onClick={() => changemode("login")}>
                            Register
                        </Button>
                    </ButtonGroup>
                    {
                        <Accordion expanded={accordion} sx={{ animationDuration: "0.3s", boxShadow: "0px 0px 0px 8px #e6e6e6", borderRadius: "4px" }}
                        >
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ display: "none" }}
                            >
                            </AccordionSummary>
                            <AccordionDetails sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexDirection: 'column', transition: "height 0.15s ease-out" }}>

                                {mode === "login" ?
                                    <>
                                        <LoginForm />
                                    </> :
                                    <>
                                        {[<RegisterForm />, <DetailsForm />, <PhotoForm />].at(data.profileStep)}

                                        {/* <Button variant="contained" disabled={loading} onClick={handleRegister}>Sign up</Button> */}

                                    </>


                                }

                            </AccordionDetails>
                        </Accordion>
                    }
                    <Stepper steps={3} mode={mode} effectFunction={effectStep} />

                    {
                        error &&
                        <Alert variant="outlined" severity="error">
                            {error}
                        </Alert>
                    }
                </div>
            </div >
        </>
    )
}

export default LoginComponent