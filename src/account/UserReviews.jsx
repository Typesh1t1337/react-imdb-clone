import {useEffect, useState} from "react";
import axios from "axios";
import styles from "../App.module.scss";

export function UserReviews(){
    const [reviews, setReviews] = useState(null);
    const BASE_URL = "http://127.0.0.1:8001/movie/api/users/review/"
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("accessToken");
    const [isReviewed, setIsReviewed] = useState(false);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`${BASE_URL}${username}/`,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setReviews(response.data);
                if (reviews.length > 0) {
                    setIsReviewed(true);
                }
            } catch(err){
                console.log(err);
            }
        }
        fetchReviews();
    })

    return (
        <div className={styles.reviews_list}>
            {isReviewed ? (
                reviews.map((review) => (
                    <div className={styles.user_review_card} key={review.id}>
                        <div className={styles.review_title}>
                            <h1>Review to {review.movie}</h1>
                            <i className="bi bi-three-dots"></i>
                        </div>
                        <h2>{review.review}</h2>
                    </div>
                ))
            ) : (
                <h2>You not wrote review yet</h2>
            )}
        </div>
    )
}