import axios from "axios";
import {useState} from "react";
import styles from "../App.module.scss";


const BASE_URL = "http://127.0.0.1:8001/movie/api/remove/watchlist/";
const username = localStorage.getItem("username");

export function RemoveFromWatch({movieId, onRemove}) {
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [messageType, setMessageType] = useState("");
    const handleRemoveFromWatch = async ()=>{
        try{
            const response = await axios.delete(`${BASE_URL}${username}/${movieId}/`,
                {
                    headers: {
                       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    }
                }
                );
            setMessage("Movie removed successfully from watchlist");
            setShow(true);
            setMessageType("success");
            onRemove(movieId);
        }
        catch(error){
            console.log(error);
            setMessageType("error");
            setShow(true);
            setMessageType("error");
            console.log(movieId);
        }
        setTimeout(() => setShow(false), 2000);
    }
    return (
        <div className={styles.desc_con3}>
            <a className={styles.rmv_btn} onClick={handleRemoveFromWatch}>Remove from watchlist</a>
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