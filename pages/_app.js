import '../styles/globals.css'
import ThemeContext from "../styles/ThemeContext"
import { AuthProvider } from "../AuthContext"
import CssBaseline from '@mui/material/CssBaseline';

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
