import {FetchMovies} from "../tmdb.js";
import {useEffect, useState} from "react";
import styles from '../App.module.scss';
import { AddToFavorites } from "./addToFavorites.jsx";

export function Content() {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const loadMovies = async () => {
            const data = await FetchMovies();
            setMovies(data);
        };
        loadMovies();
    },[]);

    return (
        <div className={styles.movies}>
            {movies.map((movie) => (
                <div className={styles.movie_card}>
                    <div className={styles.movie_img}>
                        <img src={movie.photo_url}/>
                    </div>
                    <div className={styles.movie_desc}>
                        <div className={styles.desc_con1}>
                            <p>{movie.title}</p>
                        </div>
                        <div className={styles.desc_con2}>
                            <p className={styles.desc_date}> {movie.key_words}</p>
                        </div>
                        <AddToFavorites movieId = {movie.id} />
                    </div>
                </div>
            ))}
        </div>
    )
}