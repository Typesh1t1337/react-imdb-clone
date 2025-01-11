import styles from './App.module.scss'
import { Header } from "./Header.jsx";

const menu = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Contact',
        link: '/contact',
    }
]

export function App() {
    return (
            <Header menu={menu} />
    )
}

