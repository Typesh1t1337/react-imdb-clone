import axios from "axios";
import styles from "../App.module.scss";
import {useState} from "react";

const BASE_URL = 'http://127.0.0.1:8001/movie/api/add/watchlist/';

export function AddToFavorites( {movieId} ){
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [messageType, setMessageType] = useState("");

    const handleAddToFavorites = async () => {
        try {
            const response = await axios.post(BASE_URL, {
                    movie: movieId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    }
                }
            );
            setMessage("Movie successfully added to watch list");
            setShow(true);
            setMessageType("success");
        }catch(err){
            console.log(err);
            setMessage("You already added this movie to watch list");
            setShow(true);
            setMessageType("error");
        }
        setTimeout(() => setShow(false), 2000);
    }

    return (
        <div className={styles.desc_con3}>
            <a className={styles.add_btn} onClick={handleAddToFavorites}>+ watch list</a>
            {show && (
                <div className={styles.message_con}>
                    <div className={`${styles.messageBox} ${messageType === "success" ? styles.success : styles.error}`}>
                        <p className={styles.eventresult}>{message}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
