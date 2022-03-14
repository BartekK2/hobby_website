import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f85a5a',
            white: "#dfdfdf"
        },
        secondary: {
            main: '#edf2ff',
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {

                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        cursor: "pointer",
                    },
                    " > *": {
                        width: "100%",
                    },
                    padding: "0 20px",
                    color: "white",
                },
                label: {
                    textAlign: 'center',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '&.Mui-selected': {
                        background: theme.palette.primary.main,
                        '&:hover': {
                            background: theme.palette.primary.main,
                        }
                    },
                    '&:hover': {
                        background: "white",
                        filter: 'brightness(75%);'
                    }
                }),
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    maxWidth: "48%",
                }
            }
        }
    },
});

function ThemeContext({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeContext
