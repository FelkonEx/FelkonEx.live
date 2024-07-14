import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppDispatch } from "state/store";
import actions from "state";

import { Home, Vods, ClipCompilations, Emotes, Commands } from "pages";
import { AllRoutes, BackgroundVideo, Header } from "components";

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
        <div className="app">
            <div className="app-container">
                <AllRoutes />
                <BackgroundVideo />
            </div>
        </div>
    );
}
