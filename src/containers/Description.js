import { Box, Typography, CardMedia } from "@mui/material";
import Navbar from "../components/Navbar";
import * as React from 'react';
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import tmdb from "../apis/tmdb";
import { useState } from "react";
import { Rating } from "@mui/material";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
const Description = () => {
    let {id} = useParams();
    const [movies, setMovies] = useState([]);
    
    const fetchMovies = async () => {
        try {
            const fetchedMovies = await tmdb.get(`movie/${id}`);
            setMovies(fetchedMovies.data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchMovies();
    

    return (
        <>
        <Navbar />
        <Box sx={{
            display: 'flex',
            margin: 0,
            justifyContent: 'left',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            color: '#101935',
        }}>
            <Box sx={{
                display: 'flex',
                margin: 0,
                justifyContent: 'center',
            }}>
            
            </Box>
            <Box sx={{
                display: 'flex',
                margin: 0,
                justifyContent: 'center',}}>
            <CardMedia
                component="img"
                sx={{ width: 1575, height: 500, mt:1, }}
                image={`${BASE_IMAGE_URL}${movies.backdrop_path}`} alt="backdrop"/>
            </Box>
            <Box sx={{
                m: 5,
            }}>
            <Typography variant="h3"  color="text.secondary">  { movies.title } </Typography> 
            </Box>
            <Box 
            sx={{
                display: 'flex',
                marginLeft: 10,
                marginRight: 10,
                justifyContent: 'left',
                flexDirection: 'column',
            }}>
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mb: 5}}>
                 <Typography variant="h5" color="text.secondary">Release date :</Typography>   
                 <Box sx={{ ml: 2 }}><Typography  variant="h5" color="text.secondary"> { movies.release_date }</Typography></Box>
                </Box>
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                }}>
                <Typography variant="h5" color="text.secondary">Rate </Typography>
                <Box sx={{ ml: 12 }}><Typography  variant="h5" color="text.secondary"> :</Typography></Box>
                <Box sx={{ ml: 2 }}><Rating size="large" name="read-only" precision={0.1} value={movies.vote_average / 2} max={5} readOnly /></Box>
                <Box sx={{ ml: 3 }}><Typography variant="h5" color="text.secondary">{movies.vote_average}</Typography></Box>
                </Box>
                <Box sx={{
                        marginTop: 5,
                        marginBottom: 5,
                }}>
                    <Typography variant="h5" color="text.secondary"> Description :</Typography>
                    <Typography variant="h6" color="text.secondary"> { movies.overview }</Typography>
                </Box>
            </Box>
        </Box>
        <Footer />
        </>
    )

}
export default Description;