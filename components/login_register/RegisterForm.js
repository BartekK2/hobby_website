import React from 'react'
import { TextField } from "@mui/material/"
import { useRegisterContext } from '../../contexts/RegisterContext';

function RegisterForm() {
    const { handleChange, data } = useRegisterContext();

    return (
        <>
            <TextField
                required
                label="Email"
                name="email"
                defaultValue={data.email}
                onChange={handleChange}
            />
            <TextField
                required
                label="Password"
                name="password"
                defaultValue={data.password}
                onChange={handleChange}
            />
            <TextField
                required
                label="Repeat password"
                name="password2"
                defaultValue={data.password2}
                onChange={handleChange}
            />
        </>
    )
}

export default RegisterForm