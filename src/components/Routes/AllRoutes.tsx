import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Vods, ClipCompilations, Emotes, Commands } from "pages";
import { Header } from "components";

export default function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="emotes" element={<Emotes />} />
                    <Route path="commands" element={<Commands />} />
                    <Route path="vods" element={<Vods />} />
                    <Route
                        path="clip-compilations"
                        element={<ClipCompilations />}
                    />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
