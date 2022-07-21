import TechreadyMiniProject from '../themes/TechreadyMiniProject.svg'
import { Box } from '@mui/material';

const LoadingPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            margin: 0,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <img
                src={TechreadyMiniProject} alt="loading" 
            />
           
        </Box>
    )

}
export default LoadingPage;