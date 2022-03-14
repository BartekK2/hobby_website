import '../styles/globals.css'
import ThemeContext from "../styles/ThemeContext"
import { AuthProvider } from '../contexts/AuthContext'
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <AuthProvider>
        <CssBaseline />
        <ThemeContext>
          <Component {...pageProps} />
        </ThemeContext>
      </AuthProvider>
    </>)
}

export default MyApp
