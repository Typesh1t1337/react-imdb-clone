import styles from '../App.module.scss';
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


export function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8001/account/login/',
                {
                    username,
                    password,
                })

            const token = response.data;
            const accessToken = token.access;
            const refreshToken = token.refresh;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("username", username);

            navigate('/');
        } catch (err) {
            console.log(err);
            setError("Something went wrong");
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
                <div className={styles.errors}>
                    {error &&
                        <p>{error}</p>
                    }
                </div>
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