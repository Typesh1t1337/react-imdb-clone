import axios from "axios";
import styles from "../App.module.scss";
import {useState} from "react";


export function WriteReview({movie_id,addReview}) {
    const BASE_URL = "http://127.0.0.1:8001/movie/api/movies/review/";
    const username = localStorage.getItem("username");
    const [review,setReview] = useState("");
    const token = localStorage.getItem("accessToken");


    const handleWriteReview = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post(`${BASE_URL}${movie_id}/`,
                {
                    user:username,
                    review:review,
                    movie:movie_id
                },{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

            if (response.status === 200){
                addReview(response.data);
                setReview("");
                }
        }catch(error){
            console.log(error);
            console.log(movie_id);
        }
    }

    return (
        <div className={styles.write_review_con}>
            <form onSubmit={handleWriteReview}>
                <input
                    type="text"
                    placeholder="Write review"
                    value={review}
                    onChange={e => setReview(e.target.value)}
                    required
                />
                <button type="submit" className={styles.button_send}><i className="bi bi-send-fill"></i></button>
            </form>
        </div>
    )
}