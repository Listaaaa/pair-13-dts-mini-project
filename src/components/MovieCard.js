import { Box, CardMedia, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';


const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {

  
  return (
    
    <Card id={movie.id}
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            width: 200,
            margin: 1,
          }} 
          >
      <Button href={`/Description/${movie.id}`}>
      <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              height:375,
              }}>
        <CardMedia
          component="img"
          sx={{ width: 160, height: 225, mt:1, }}
          image={`${BASE_IMAGE_URL}${movie.poster_path}`}
          alt="Movie poster"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column',   }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Box sx={{
                width: 160,
                display: 'flex',
                ml: 8,
                mr: 8,
              }}>
              <Typography variant="h6">
                {movie.title}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
      </Button>
    </Card>
    
  );
}

export default MovieCard;