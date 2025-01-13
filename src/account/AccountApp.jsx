import { LoginForm } from "./LoginForm.jsx";
import {RegisterForm} from "./RegisterForm.jsx";
import {useLocation} from "react-router-dom";
import {Header} from "../Header.jsx";
import styles from "../App.module.scss";


export function AccountApp() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/account/login';


    return (
        <>
            <div className={styles.login_div} style={{display:'flex'}}>

                    <div className={styles.login_card}>
                        {isLoginPage ? <LoginForm/> : <RegisterForm/>}
                    </div>
            </div>
        </>
    )
}