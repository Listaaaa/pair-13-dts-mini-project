import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import tmdb from '../apis/tmdb';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("discover/movie");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 5,
        }}>
            <Box >
                <Typography variant='h3' >LIST OF MOVIES</Typography>
            </Box>
            <Box 
                sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                mt: 5,
            }}>
                {
                    movies.map(movie => (
                        <MovieCard key={movie.title} movie={movie}></MovieCard>
                    ))
                }
            </Box>
            <Footer />
        </Box>
    );
}

export default MovieList;
