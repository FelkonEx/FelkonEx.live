import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppDispatch } from "state/store";
import actions from "state";

import { Home, Vods, ClipCompilations, Emotes, Commands } from "pages";
import { BackgroundVideo, Header } from "components";

import "./App.scss";

export default function App() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(actions.fetchYoutubeVodsAsync());
        dispatch(actions.fetchYoutubeCompilationsAsync());
        dispatch(actions.fetchSevenTvEmotesAsync());
        dispatch(actions.fetchTwitchEmotesASync());
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
                        <Route path="commands" element={<Commands />} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <BackgroundVideo />
        </div>
    );
}
