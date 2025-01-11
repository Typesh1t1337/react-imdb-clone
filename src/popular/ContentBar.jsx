import styles from '../App.module.scss';
import {Content} from './Content.jsx';


export function ContentBar() {
    return (
        <div className={styles.content_bar}>
            <div className={styles.title}>
                <h1 className={styles.text_title}>Popular movies</h1>
            </div>
                <Content />
        </div>
    )
}

