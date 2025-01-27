import styles from '../App.module.scss';
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


export function RegisterForm() {
    const [username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== password2) {
            setError("Passwords don't match");
        }

        try{
            const response = await axios.post("http://127.0.0.1:8001/account/register/",
                {
                    username,
                    email,
                    password,
                });
            const tokens = response.data;

            const accessToken = tokens.access;
            const refreshToken = tokens.refresh;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("username", username);

            window.location.href = "/";
        }catch(e){
            setError("Error creating account");
            console.log(e);
        }

    }

    return (
        <div className={styles.card_con}>
            <div className={styles.route_bounce}>
                <Link to="/account/login" className={styles.inactive_a}>Log in</Link>
                <a  className={styles.active_a}>Register</a>
            </div>
            <form onSubmit={handleSubmit}>
            <input className={styles.login_input} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}  required/>
            <input className={styles.login_input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className={styles.login_input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input className={styles.login_input} type="password" placeholder="Confirm Password" value={password2} onChange={(e) => setPassword2(e.target.value)} required />
                <button className={styles.login_btn}>Register</button>
            </form>
        </div>


    )
}