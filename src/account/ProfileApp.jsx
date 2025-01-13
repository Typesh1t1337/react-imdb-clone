import {Header} from "../Header.jsx";
import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import {getProfile, setAuthToken} from "../profileAPI.js";
import styles from "../App.module.scss"



export function ProfileApp() {
    const [user,setUser] = useState({});
    const {name} = useParams();
    let errors = "";


    useEffect(() => {
        console.log(errors);
        const fetchData = async () => {
            const token = localStorage.getItem("accessToken");
            if(token){
                const data = await getProfile(name,token);
                await setAuthToken(token);
                setUser(data);
            }else{
                console.log("pizdes");
            }
        }
        fetchData();
    },[name]);


    return (
        <>
            <Header />
            <div className={styles.profile_container}>
                <div className={styles.profile_card}>
                    <h1 className={styles.username}>username: {user.username}</h1>
                    <h2>email: {user.email}</h2>
                    {user.first_name  ? <h2>first name: {user.first_name}</h2> : <h2>first name: not given</h2>}
                    {user.last_name  ? <h2>second name: {user.last_name}</h2> : <h2>first name: not given</h2>}
                </div>
            </div>
        </>
    )
}