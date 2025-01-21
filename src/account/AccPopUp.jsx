import styles from '../App.module.scss';

export function AccPopUp({isOpen,onClose}) {

    if (!isOpen) return null;

    const username = localStorage.getItem('username');

    const handleOverlayClick = (e) => {
        if(e.target === e.currentTarget) {
            onClose();
        }
    }

    const handleLogout = () =>{
        localStorage.clear();

        window.location.href="/";
    }


    return (
        <div className={`${styles.acc_popup} ${isOpen ? styles.acc_popup_show : " " }`} onClick={handleOverlayClick}>
            <div className={`${styles.popup_content} ${isOpen ? styles.popup_content_show : ""}`}>
                <div className={styles.link_container}>
                    <a href={`/account/profile/${username}`} className={styles.popup_links}>
                        Profile
                    </a>
                </div>
                <div className={styles.link_container}>
                    <a className={styles.popup_links} href={`/account/reviews/${username}`}>
                        My reviews
                    </a>
                </div>
                <div className={styles.link_container}>
                    <a className={styles.popup_links} onClick={handleLogout}>
                        logout
                    </a>
                </div>
            </div>
        </div>
    );
}