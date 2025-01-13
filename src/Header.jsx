import styles from './App.module.scss';
import logo from './assets/clapperboard-2.png';
import { AccPopUp } from "./account/AccPopUp.jsx";
import { useState} from "react";


const menu = [
    {
        name: 'Popular',
        link: '/popular',
    },
    {
        name: 'watch list',
        link: '/watchlist',
    },
]

export function Header() {
    const username = localStorage.getItem("username");

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    }
    const closePopup = () => {
        setIsPopupOpen(false);
    }


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href='/'>
                    <img src={logo} alt='icon' width={64}/>
                </a>
            </div>
            <div className={styles.header_nav}>
                <ul className={styles.nav_content}>
                    {menu.map((item,index) =>(
                        <li key={index}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                        ))}
                    {username ? (
                        <li>
                            <a id={"account_popup"}
                               style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={openPopup}>
                                <i className="bi bi-person-fill"></i>
                                {username}
                            </a>
                        </li>
                    ) : (
                        <li>
                            <a href={"/account/login"}>Log in</a>
                        </li>
                    )
                    }
                </ul>
            </div>
            <AccPopUp isOpen={isPopupOpen} onClose={closePopup} />
        </header>
    )
}

