import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useRegisterContext } from '../contexts/RegisterContext';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export default function MultipleSelectChip({ options, label, width = "223px", ...props }) {
    const [selected, setSelected] = useState([]);
    const { setData, } = useRegisterContext();
    const picker = useRef(null);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelected(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    useEffect(() => {
        setData((prevState) => ({
            ...prevState,
            hobby: selected
        }));
    }, [selected])

    useEffect(() => {
        // set dropdown menu width to input real width
        if (picker.current !== null)
            setMenuWidth(picker.current.getBoundingClientRect().width);
    }, [picker])

    const [MenuWidth, setMenuWidth] = useState("300px")
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: MenuWidth,
            },
        },
    };


    return (
        <div ref={picker} style={{ width: width }}>
            <FormControl sx={{ width: width }}>
                <InputLabel>{label}</InputLabel>
                <Select
                    multiple
                    value={selected}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip sx={{ background: "#f85a5a" }} key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option}
                            value={option}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}