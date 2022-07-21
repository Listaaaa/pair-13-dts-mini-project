import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import movieTheaterCrop from '../picture/movieTheaterCrop.JPG'
import { auth } from '../config/firebase';


const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        
        <Box display="flex" flexDirection="row">
            <Container component="main" maxWidth="xs" sx={{ml: 10, mr: 10}} display="flex" flexDirection="row">
                <Box
                    sx={{
                        mt: 10,
                        mb: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" >
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    
                        <Typography color='red'>{errorMessage}</Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item sx={{ mt: 2}}  >
                                <Link to="/register" color="inherit" style={{textDecoration:'none', color:'#F2FDFF' }} >
                                    "Don't have an account? Sign Up"
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container >
            <Box position={"right"}>
            <img
                src={movieTheaterCrop} alt="image" width={"100%"}
            /> 
            </Box>
        </Box>
    
    );
}

export default Login;
