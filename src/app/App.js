import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, NoPage, Vods, ClipCompilations } from "pages";

import "./App.scss";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="vods" element={<Vods />} />
                        <Route
                            path="clip-compilations"
                            element={<ClipCompilations />}
                        />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
