import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8001/movie/api/watchlist/';
const username = localStorage.getItem('username');
const token = localStorage.getItem('accessToken');

export const FetchWatchlist = async () => {
    try{
        const response = await axios.get(`${BASE_URL}${username}`,
        {
           headers: {
               Authorization: `Bearer ${token}`,
           }
        });
        return response.data;
    }catch(err){
        console.error(err);
        return [];
    }

}