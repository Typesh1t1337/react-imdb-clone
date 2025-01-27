import styles from '../App.module.scss'
import {useEffect, useRef, useState} from "react";
import axios from "axios";

export function IndexMovieBar() {
    const [bestMovie, setBestMovie] = useState([]);
    const movieListRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response =  await axios.get("http://127.0.0.1:8001/movie/api/movies/bestmovies/");
                setBestMovie(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },[]);

    const scrollRight = () =>{
        console.log(movieListRef.current);
        if(movieListRef.current){
            movieListRef.current.scrollBy({
                left: 1370,
                behavior: "smooth"
            });
        }
    }


    const scrollLeft = () => {
        if(movieListRef.current){
            console.log(movieListRef.current);
            movieListRef.current.scrollBy(
                {
                    left: -1370,
                    behavior: "smooth"
                }
            );
        }
    }
    return (
        <div className={styles.index_movie_bar}>
            <div className={styles.best_movies}>
                <div className={styles.best_bdr}/>
                <h1>Top 20 best movies</h1>
            </div>
            <div className={styles.best_movies_container}>
                <button className={styles.best_scroll_right} onClick={scrollLeft}>
                    ❮
                </button>
                <button className={styles.best_scroll_left} onClick={scrollRight}>
                    ❯
                </button>
                <div className={styles.best_movies_slider} ref={movieListRef}>
                    <div className={styles.best_movies_list}>
                        {bestMovie.map((movie, index) => (
                            <div className={styles.best_movie_card} key={index}>
                                <div className={styles.best_movies_img_part}>
                                    <img src={movie.photo_url}/>
                                </div>
                                <div className={styles.best_movies_info_part}>
                                    <div className={styles.best_rating_part}>
                                        <i className="bi bi-star-fill"></i>
                                        <p>{movie.rating}</p>
                                    </div>
                                    <div className={styles.best_title_part}>
                                        <h1>{movie.title}</h1>
                                    </div>
                                    <div className={styles.best_key_words_part}>
                                        <h2>{movie.key_words}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}