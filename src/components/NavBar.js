// import { AppBar, Typography, Button, Toolbar } from '@mui/material'
// import LoginIcon from '@mui/icons-material/Login';

// import LogoutIcon from '@mui/icons-material/Logout';

import React, { useState } from 'react'
import Logo from  '../images/zomato.png'
import { Link } from 'react-router-dom'

import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'


const NavBar = () => {

        const [openLinks, setOpenLinks] = useState(false);

        const toggleNavbar = () => {
            setOpenLinks(!openLinks);
          };

  return <>

  {/* <AppBar position="fixed" >
      <Toolbar>
        <Typography variant="h6" flexGrow= {1} >
            HOME MENU 
        </Typography>
    
            <Button variant="text"  color="inherit" startIcon={<LoginIcon />} >
                Login
            </Button>

            <Button variant="text"  color="inherit" endIcon={<LogoutIcon />} >
                Sign-In
            </Button>
     </Toolbar>
  </AppBar> */}

    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/">HOME</Link>
                    <Link to="/menu">MENU</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link> 
                </div>
        </div>

        <div className="rightSide">
            <Link to="/">HOME</Link>
            <Link to="/menu">MENU</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>

           

            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
        
   </div>
   
  </>;
}

export default NavBar;