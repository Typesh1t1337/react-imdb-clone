import axios from "axios";


const BASE_URL = "http://127.0.0.1:8001/movie/api/movies/review/";
const token  = localStorage.getItem("accessToken");

export const getMovieReviews = async (movie_id) => {
    try{
        const response = await axios.get(`${BASE_URL}${movie_id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export const writeMovieReview = async (movie_id,username,rating,review) => {
    try {
        const response = await axios.post(`${BASE_URL}${movie_id}`,
            {
                username,
                rating,
                review,
                movie_id
            },{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        return response.data;
    }catch(error){
        console.log(error);
    }
}
