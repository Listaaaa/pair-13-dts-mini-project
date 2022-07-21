import axios from 'axios';

const API_KEY = "65c98af9cbf83afca3480247f69f6453";
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
