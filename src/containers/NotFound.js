import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import error from '../picture/error.png'

const NotFound = () => {
    return (
        <Box sx={{
            display: 'flex',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <img width={400}
                src={error}
                alt="404"
            />
            <p>You have reach the edge of universe</p>
            <Link underline="none" color="inherit" to="/">Take me home!</Link>
        </Box>
    )
}

export default NotFound;
