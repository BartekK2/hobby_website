import React, { useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from '../styles/dashboard.module.css'
import { Button } from '@mui/material';
import { useTheme } from '@mui/styles';
import { Divider } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

function Navigation() {
    const theme = useTheme();
    const { logout } = useAuth();

    return (
        <>
            {/* zmien paddingi na normalniejsze wiesz ocb nie  */}
            {/* https://cssbud.com/css-generator/css-glow-generator/ */}
            <div style={{
                display: "flex", width: "clamp(90px, 30%, 180px)", boxShadow: "rgb(248 90 90 / 90%) 0px 0px 70px 10px",
                flexDirection: "column", alignItems: "center", gap: "20px", background: theme.palette.primary.main, color: "white", marginLeft: "20px", borderRadius: "20px", padding: "20px"
            }}>
                <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", margin: 0, fontSize: "24px", }}><AccountBoxIcon sx={{ fontSize: "inherit", marginRight: "8px", color: "#f73131" }} /> Hobbyist.pl</p>
                <Divider sx={{ width: "100%", marginBottom: "50px" }} />
                <Element Icon={AccountBoxIcon} text="Profile"></Element>
                <Element Icon={SearchIcon} text="Search"></Element>
                <Element Icon={DashboardIcon} text="Posts"></Element>
                <Element Icon={SettingsIcon} text="Settings"></Element>
                <Button variant="contained" sx={{ background: theme.palette.primary.white, color: "black", marginTop: "auto", marginBottom: "20px" }} onClick={logout}>Wyloguj</Button>
            </div >
        </>
    )
}

const SelectWall = () => {
    const theme = useTheme();

    return (
        <div style={{ height: "100%", width: "3px", background: "#f73131" }} />
    )
}

// DO ZROBIENIA - dodaj żeby na bazie wybranej strony był drawer aktywowany tylko wtedy kiedy przycisk odnosi się do wspomnianej podstrony
const Element = ({ text = "Menu", Icon }) => {
    return (
        <Button sx={{ width: "100%", color: "black", display: "flex", justifyContent: "space-between", color: "white", textTransform: "none" }}>
            <Icon /> <p style={{ margin: 0 }}>{text}</p><SelectWall />
        </Button>
    )
}

export default Navigation