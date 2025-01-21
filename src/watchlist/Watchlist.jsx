import {useEffect, useState} from "react";
import styles from '../App.module.scss';
import {FetchWatchlist} from "../listAllFavorites.js";
import {RemoveFromWatch} from "./RemoveFromWatchList.jsx";


export function WatchList() {
    const [watchList, setWatchList] = useState([]);
    const [isOpenId, setIsOpenId] = useState(null);

    const openPopup = (movieId) => {
        setIsOpenId(movieId);
    }

    const closePopup = () => {
        setIsOpenId(null);
    }


    useEffect(() => {
        const loadWatchList = async () => {
            const data = await FetchWatchlist();
            setWatchList(data);
        };
        loadWatchList();
    },[]);

    const removeFromWatch = (movieId) => {
        setWatchList(watchList.filter((movie) => movie.id !== movieId));
    }

    return (
        <div className={styles.movies}>
            {watchList.length > 0 ? (
                watchList.map((movie) => (
                    <div className={styles.movie_card}>
                        <div className={styles.movie_img} onClick={() => setIsOpenId(movie.id)}>
                            <img src={movie.photo_url}/>
                        </div>
                        <div className={styles.movie_desc}>
                            <div className={styles.desc_con1}>
                                <p>{movie.title}</p>
                            </div>
                            <div className={styles.desc_con2}>
                                <p className={styles.desc_date}> {movie.key_words}</p>
                            </div>
                            <RemoveFromWatch  movieId= {movie.id} onRemove={removeFromWatch} />
                        </div>
                        {isOpenId === movie.id && (
                            <div className={styles.details_popup} onClick={closePopup}>
                                <div className={styles.details_con} onClick={(e)=>e.stopPropagation()}>
                                    <div className={styles.details_img}>
                                        <img src={movie.photo_url}/>
                                    </div>
                                    <div className={styles.details_content_part}>
                                        <div className={styles.details_title}>
                                            <h1>{movie.title}</h1>
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
                                                <i className="bi bi-star-fill"></i>
                                                <p className={styles.rating_amount}>{movie.rating * 10}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            ):(
                <h2>You not added movies to watch list yet...</h2>
                )}
        </div>
    )
}