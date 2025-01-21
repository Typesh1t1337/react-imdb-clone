import {FetchMovies} from "../tmdb.js";
import {useEffect, useState} from "react";
import styles from '../App.module.scss';
import { AddToFavorites } from "./addToFavorites.jsx";
import {MoviePopUp} from "./MoviePopUp.jsx";
import {Route,Routes, useNavigate} from "react-router-dom";



export function Content() {
    const [movies, setMovies] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const[nextPage, setNextPage] = useState(null);
    const[prevPage, setPrevPage] = useState(null);
    const[isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const loadMovies = async () => {
            setIsLoading(true);
            try {
                const data = await FetchMovies(currentPage);
                setMovies(data.results);
                setNextPage(data.next);
                setPrevPage(data.previous);
            }
            catch(error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
        };
        loadMovies();
    },[currentPage]);

    const bounceNextPage = () => {
        if (nextPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const bouncePreviousPage = () => {
        if (prevPage) {
            setCurrentPage(currentPage - 1);
        }
    }


    const openPopup = (id) => {
        navigate(`movie/${id}`);
    };

    const closePopup = () => {
        navigate(-1);
    };

    return (
        <div className={styles.movies}>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                movies.map((movie) => (
                    <div className={styles.movie_card} key={movie.id}>
                        <div className={styles.movie_img} onClick={() => openPopup(movie.id)}>
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
                )))}
            <div className={styles.pagination_popular}>
                <div className={styles.pagination_content}>
                    {prevPage && (
                        <a className={styles.prev_button} onClick={bouncePreviousPage}>
                            <i className="bi bi-arrow-left-short"></i>
                        </a>
                    )}
                    {nextPage && (
                        <a className={styles.next_button} onClick={bounceNextPage}>
                        <i className="bi bi-arrow-right-short"></i>
                    </a>
                        )}
                </div>
            </div>
            <Routes>
                <Route path={"/movie/:id"} element={<MoviePopUp movies={movies} closePopup={closePopup} />} />
            </Routes>
        </div>
    );
}