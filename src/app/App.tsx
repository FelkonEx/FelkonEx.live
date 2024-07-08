import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppDispatch } from "state/store";
import { fetchCompilationsAsync, fetchVodsAsync } from "state/youtube/youtubeSlice"
import { fetchSevenTvEmotesAsync } from "state/sevenTv/sevenTvSlice";

import { Home, Vods, ClipCompilations, Emotes } from "pages";
import { BackgroundVideo, Header } from "components";

import "./App.scss";

export default function App() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchVodsAsync());
        dispatch(fetchCompilationsAsync());
        dispatch(fetchSevenTvEmotesAsync());
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path="vods" element={<Vods />} />
                        <Route path="emotes" element={<Emotes />} />
                        <Route
                            path="clip-compilations"
                            element={<ClipCompilations />}
                        />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <BackgroundVideo />
        </div>
    );
}
