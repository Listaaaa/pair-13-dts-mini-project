import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
<AppBar position='static' sx={{mt: 10}}>
      <Container display='flex' flexDirection='row' >
        <Box display='flex' flexDirection='row'
             >
                <Box display='flex' flexDirection='column' width={300}>
                    <Typography
                    component="a"
                    href="/audio"
                    sx={{ ml: 5, mr: 15, mt: 5, width: 150, textDecoration: "none", color: "inherit"}} >Audio and Subtitles </Typography>
                    <Typography 
                    component="a"
                    href="/mediaCenter"
                    sx={{ ml: 5, mr: 15, mt: 3, width: 150, textDecoration: "none", color: "inherit"}} >Media Center</Typography>
                    <Typography 
                    component="a"
                    href="/security"
                    sx={{ ml: 5, mr: 15, mt: 3, width: 150, textDecoration: "none", color: "inherit"}} >Security</Typography>
                    <Typography 
                    component="a"
                    href="/contactUs"
                    sx={{ ml: 5, mr: 15, mt: 3, width: 150, textDecoration: "none", color: "inherit"}} >Contact Us</Typography>
                </Box>
                <Box display='flex' flexDirection='column' width={300}>
                    <Typography 
                    component="a"
                    href="/audioDesc"
                    sx={{ ml: 5, mr: 15, mt: 5, width: 150, textDecoration: "none", color: "inherit"}} >Audio Description </Typography>
                    <Typography 
                    component="a"
                    href="/investor"
                    sx={{ ml: 5, mr: 15, mt: 3, width: 150, textDecoration: "none", color: "inherit"}} >Investor Relation</Typography>
                    <Typography 
                    component="a"
                    href="/legalProv"
                    sx={{ ml: 5, mr: 15, mt: 3, width: 150, textDecoration: "none", color: "inherit"}} >Legal Provisions</Typography>
                </Box>
                <Box display='flex' flexDirection='column' width={300}>
                    <Typography 
                    component="a"
                    href="/helpCenter"
                    sx={{ ml: 5, mr: 15, mt: 5, width: 150, textDecoration: "none", color: "inherit"}} >Help Center </Typography>
                    <Typography 
                    component="a"
                    href="/jobs"
                    sx={{ ml: 5, mr: 15, mt: 3, width: 150, textDecoration: "none", color: "inherit"}} >Jobs</Typography>
                    <Typography 
                    component="a"
                    href="/cookie"
                    sx={{ ml: 5, mr: 15, mt: 3, width: 150, textDecoration: "none", color: "inherit"}} >Cookie Preferences</Typography>
                </Box>
                <Box display='flex' flexDirection='column' width={300}>
                    <Typography 
                    component="a"
                    href="/giftCard"
                    sx={{ ml: 5, mr: 15, mt: 5, width: 150, textDecoration: "none", color: "inherit"}} >Gift Card </Typography>
                    <Typography 
                    component="a"
                    href="/termOfUse"
                    sx={{ ml: 5, mr: 15, mt: 3, width: 150, textDecoration: "none", color: "inherit"}} >Term of Use</Typography>
                    <Typography 
                    component="a"
                    href="/coorporate"
                    sx={{ ml: 5, mr: 15, mt: 3, width: 200, textDecoration: "none", color: "inherit"}} >Corporate Information</Typography>
                </Box>
          
          
        </Box>
        <Button>
            <Typography sx={{ ml: 4, mr: 15, mt: 5}}>
                ServiceCode
            </Typography>
        </Button>
        
        <Box display='flex' flexDirection='column' flexWrap='wrap'>
                
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        ml: 5,
                        mb: 5,
                        mt: 2,
                    display: { xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    fontSize: 15,
                    letterSpacing: '0',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    ©2022 Movie, All Right Reserved
                </Typography>
        </Box>
          
          
          </Container>
      </AppBar>
        );
    };
    export default Footer;