import { Header } from "../Header.jsx";
import { ContentBar } from "./ContentBar.jsx"


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

export function PopularApp() {
    return (
        <>
            <Header menu={menu} />
            <ContentBar />
        </>
    )
}