import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useRegisterContext } from '../contexts/RegisterContext';
import { async } from '@firebase/util';

export default function Stepper({ steps, effectFunction, mode }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const { setData, data } = useRegisterContext();

    useEffect(() => {
        setData((prevState) => ({
            ...prevState,
            profileStep: activeStep
        }));
    }, [activeStep])

    const handleNext = () => {
        effectFunction(() => setActiveStep((prevActiveStep) => prevActiveStep + 1))
    };

    const handleBack = () => {
        effectFunction(() => setActiveStep((prevActiveStep) => prevActiveStep - 1))
    };

    return (
        <MobileStepper
            variant="progress"
            steps={steps}
            position="static"
            activeStep={activeStep}
            sx={{ opacity: mode === "login" ? "0" : "100%", transition: "opacity 0.5s", maxWidth: 400, flexGrow: 1, width: "-webkit-fill-available", gap: "5px" }}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === steps - 1}>
                    Next
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
            }
        />
    );
}