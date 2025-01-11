import {Route, BrowserRouter, Routes} from "react-router-dom";
import { WatchListApp } from './watchlist/WatchListApp.jsx'
import { IndexApp } from './index/IndexApp.jsx'
import { PopularApp } from "./popular/PopularApp.jsx";
import {AccountApp} from "./account/AccountApp.jsx";


export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/popular" element={<PopularApp/>} />
                <Route path="/watchlist" element={<WatchListApp />} />
                <Route path="/*" element={<IndexApp />} />
                <Route  path="/account/*" element={<AccountApp />} />
            </Routes>
        </BrowserRouter>
    )
}

