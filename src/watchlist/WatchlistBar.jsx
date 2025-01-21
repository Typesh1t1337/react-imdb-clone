import styles from '../App.module.scss';
import {WatchList} from "./Watchlist.jsx";

export function WatchlistBar() {
    return (
        <div className={styles.content_bar}>
            <div className={styles.title}>
                <h1 className={styles.text_title}>Watch list</h1>
            </div>
            <WatchList />
        </div>
    )
}