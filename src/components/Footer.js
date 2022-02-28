// import { Typography, Grid, Button } from '@mui/material';
// import React from 'react'
// // import { Box } from '@mui/system';
// import Box from '@mui/material/Box';
// import Cake from '../images/cake.png'


// const HeroSection = () => {

//   return <>
//     <Grid container direction="row" alignItems={"center"}>
//         <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
//             <Typography variant="h3" >
//                 A Bliss in Every Byte...!
//             </Typography>

//             <Typography variant="h5" >
//                We Offer Tasty Cakes n Sweets for you...!
//             </Typography>

//             <Button size="large" variant="contained" sx={{borderRadius:5}}>
//                     call Us
//             </Button>
//          </Grid>

//         <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
//             <Box component="img" src={Cake} />
//         </Grid>
//     </Grid>
//   </>
// };

// export default HeroSection;



import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";


const Footer = () => {

  return<>

    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
        <p> &copy; 2008 Zomato.com</p>
    </div>
  </>;
}

export default Footer;