import styles from '../App.module.scss';
import {useState} from "react";
import {Link} from "react-router-dom";
import {Header} from "../Header.jsx";

import axios from "axios";

export function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post("http://127.0.0.1:8000/account/login/", {username, password})
            const {accessToken, refreshToken} = response.data;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            window.location.href = "/";

        }
        catch(err){
            console.log(err);
            setError("Error occured");
        }
    };

    return (
        <div className={styles.card_con}>
            <div className={styles.route_bounce}>
                <a className={styles.active_a}>Log in</a>
                <Link to="/account/register" className={styles.inactive_a}>Register</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <input className={styles.login_input} type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                <input className={styles.login_input} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button className={styles.login_btn}>Login</button>
            </form>
            <div className={styles.separate_line}>
                <div className={styles.line}/>
            </div>
            <div className={styles.fg_ps_div}>
                <a className={styles.fg_ps_link}>
                    Forget password?
                </a>
            </div>
        </div>
    )
}