import React from 'react'
import { TextField } from "@mui/material/"
import MultipleSelectChip from '../MultipleSelect'
import { useRegisterContext } from '../../contexts/RegisterContext'

function DetailsForm() {
    const { handleChange, hobbys, data } = useRegisterContext();

    return (
        <>
            <TextField
                label="Imie"
                name="imie"
                defaultValue={data.imie}
                onChange={handleChange}
            />
            <TextField
                label="Nazwisko"
                name="nazwisko"
                defaultValue={data.nazwisko}
                onChange={handleChange}
            />
            <TextField
                label="Nazwa użytkownika"
                name="nickname"
                defaultValue={data.nickname}
                onChange={handleChange}
            />
            <MultipleSelectChip options={hobbys} label="Twoje hobby" />

        </>
    )
}

export default DetailsForm