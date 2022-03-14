import React, { useEffect } from 'react'
import { TextField, Button } from "@mui/material/"
import { useRegisterContext } from '../../contexts/RegisterContext';

function LoginForm() {
    const { handleChange, handleLogin, loading, data } = useRegisterContext();

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
            <Button variant="contained" disabled={loading} onClick={handleLogin}>Sign in</Button>
        </>
    )
}

export default LoginForm