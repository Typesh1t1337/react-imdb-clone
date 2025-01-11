import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/movie/api/movies/';

export const FetchMovies = async () => {
    try{
        const response = await axios.get(BASE_URL);
        return response.data;
    }catch(error){
        console.log(error);
        return [];
    }
}

