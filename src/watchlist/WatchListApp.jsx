import { Header } from "../Header.jsx";



const menu = [
    {
        name: 'Popular',
        link: '/popular',
    },
    {
        name: 'watch list',
        link: '/watchlist',
    },
    {
        name: 'Log in',
        link: '/account/login',
    }
]

export function WatchListApp() {
    return (
        <>
            <Header menu={menu} />
        </>
    )
}