import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import TechreadyMiniProject from '../themes/TechreadyMiniProject.svg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
        <Navbar />
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 5,
        }}>
            <img
                src={TechreadyMiniProject} alt="loading" 
            />
           
        
            <Outlet/>
        </Box>
        <Footer />
        </>
    )
}

export default About;