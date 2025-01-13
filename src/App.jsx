import {Route, BrowserRouter, Routes} from "react-router-dom";
import { WatchListApp } from './watchlist/WatchListApp.jsx'
import { IndexApp } from './index/IndexApp.jsx'
import { PopularApp } from "./popular/PopularApp.jsx";
import {AccountApp} from "./account/AccountApp.jsx";
import {ProtectedRoute} from "./ProtectedRoute.jsx";
import {ProfileApp} from "./account/ProfileApp.jsx";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/popular" element={<PopularApp/>} />
                <Route path="/watchlist" element={<ProtectedRoute> <WatchListApp /></ProtectedRoute> } />
                <Route path="/*" element={<IndexApp />} />
                <Route  path="/account/*" element={<AccountApp />} />
                <Route  path="/account/profile/:name" element={<ProtectedRoute><ProfileApp /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

