import styles from "../App.module.scss";
import axios from "axios";
import {useEffect, useState} from "react";


export function DisplayReviews({movie_id,reviews,setReviews}) {
    const BASE_URL = "http://127.0.0.1:8001/movie/api/movies/display/";
    const token  = localStorage.getItem("accessToken");


    useEffect(() => {
        const loadMovieReviews = async () => {
            try {
                const response = await axios.get(`${BASE_URL}${movie_id}/`
                );

                setReviews(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        loadMovieReviews();
    },[movie_id,reviews,setReviews]);



    return (
        <div className={styles.reviews_list}>
            <div className={styles.reviews_list_swipeable}>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div className={styles.review_card} key={review.id}>
                            <h1>{review.user}</h1>
                            <h2>{review.review}</h2>
                        </div>
                        ))
                ):(
                    <p>No reviews found.</p>
                )}
            </div>
        </div>
    )
}