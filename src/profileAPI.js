import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/account/profile/'

const ss = ""

export const setAuthToken = async (token) => {
    if(token){
         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }else{
         delete axios.defaults.headers['Authorization'];
    }
};


export const getProfile = async (username,token) => {
    try {
        const response = await axios.get(`${BASE_URL}${username}`,
            {
                headers:{ 'Authorization':`Bearer ${token}`}
            }
            );
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }

}