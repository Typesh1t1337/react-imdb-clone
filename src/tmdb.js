import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8001/movie/api/movies/?page=';

export const FetchMovies = async (page) => {
    try{
        const response = await axios.get(`${BASE_URL}${page}`);
        return response.data;
    }catch(error){
        console.log(error);
        return [];
    }
}

