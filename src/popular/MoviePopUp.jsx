import styles from "../App.module.scss";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {WriteReview} from "./writeReview.jsx";
import {DisplayReviews} from "./DisplayReviews.jsx";

export function MoviePopUp({movies, closePopup}) {
    const {id} = useParams();
    const [reviews, setReviews] = useState([]);

    const movie = movies.find((movie) => movie.id === parseInt(id));

    const[openDesc, setOpenDesc] = useState(true);

    const swipeToReview = () =>{
        setOpenDesc(false);
    }

    const swipeToDescription = () =>{
        setOpenDesc(true);
    }

    if (!movies || movies.length === 0) {
        return null;
    }

    const addReview = (newReview) =>{
        setReviews((prevReviews) => [...prevReviews, newReview]);
    }

    return (
        <div className={styles.details_popup} onClick={closePopup}>
            <div className={styles.details_con} onClick={(e) => e.stopPropagation()}>
                <div className={styles.details_img}>
                    <img src={movie.photo_url} alt={movie.title}/>
                </div>
                <div className={styles.details_content_part}>
                    {openDesc ? (
                        <>
                            <div className={styles.details_title}>
                                <h1>{movie.title}</h1>
                                <a className={styles.swipe_link} onClick={swipeToReview}>Reviews<i
                                    className="bi bi-arrow-right-short"></i></a>
                            </div>
                            <div className={styles.details_key_words}>
                                <p>{movie.key_words}</p>
                            </div>
                            <div className={styles.details_desc}>
                                <p>{movie.description}</p>
                            </div>
                            <div className={styles.details_category}>
                                <p className={styles.category}>Category</p>
                                <p className={styles.category_name}>{movie.filters}</p>
                            </div>
                            <div className={styles.details_rating}>
                                <p className={styles.rating}>Rating</p>
                                <div className={styles.rating_info}>
                                    <p className={styles.rating_amount}>{movie.rating * 10}</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.reviews_title}>
                                <h1>{movie.title}</h1>
                                <a className={styles.swipe_link} onClick={swipeToDescription}>
                                    <i className="bi bi-arrow-left-short"></i> Description</a>
                            </div>
                            <DisplayReviews movie_id = {movie.id} reviews={reviews} setReviews={setReviews} />
                            <WriteReview movie_id = {movie.id} addReview = {addReview} />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
