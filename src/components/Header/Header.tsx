import { Outlet, Link, NavLink } from "react-router-dom";

import "./Header.scss";
export default function Header() {
    function styledIfActive(isActive: boolean) {
        return { color: isActive ? "red" : "blue" };
    }

    return (
        <div className="header-container">
            {/* <div className="is-live-banner">
                <span>Felkon is LIVE right now!</span>
            </div> */}
            <div className="header-links">
                <NavLink
                    style={({ isActive }) => styledIfActive(isActive)}
                    to="/"
                >
                    About
                </NavLink>
                <NavLink
                    style={({ isActive }) => styledIfActive(isActive)}
                    to="/emotes"
                >
                    Emotes
                </NavLink>
                <NavLink
                    style={({ isActive }) => styledIfActive(isActive)}
                    to="/vods"
                >
                    Commands
                </NavLink>
                <NavLink
                    style={({ isActive }) => styledIfActive(isActive)}
                    to="/vods"
                >
                    Vods
                </NavLink>
                <NavLink
                    style={({ isActive }) => styledIfActive(isActive)}
                    to="/clip-compilations"
                >
                    Compilations
                </NavLink>
            </div>
            <Outlet />
        </div>
    );
}
