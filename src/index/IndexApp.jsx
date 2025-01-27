import { Header } from "../Header.jsx";
import {IndexContentBar} from "./IndexContentBar.jsx";
import {IndexMovieBar} from "./indexMovieBar.jsx";



export function IndexApp() {
    return (
        <>
            <Header />
            <IndexContentBar />
            <IndexMovieBar />
        </>
    )
}