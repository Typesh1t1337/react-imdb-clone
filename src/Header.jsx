import styles from './App.module.scss';
import logo from './assets/clapperboard-2.png';

export function Header({menu}) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt='icon'  width={64}/>
            </div>
            <div className={styles.header_nav}>
                <ul className={styles.nav_content}>
                    {menu.map((item,index) =>(
                        <li key={index}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                        ))}
                </ul>
            </div>
        </header>
    )
}

