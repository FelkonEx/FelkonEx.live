import { Outlet, Link, NavLink } from "react-router-dom";

import "./Header.scss";
import Tabs from "components/Tabs/Tabs";
export default function Header() {
    // function styledIfActive(isActive: boolean) {
    //     return { color: isActive ? "orange" : "black" };
    // }

    return (
        <div className="header-container">
            <div className="header-links">
                <Tabs className="header-tabs">
                    <NavLink
                        // style={({ isActive }) => styledIfActive(isActive)}
                        to="/"
                    >
                        About
                    </NavLink>
                    <NavLink
                        // style={({ isActive }) => styledIfActive(isActive)}
                        to="/emotes"
                    >
                        Emotes
                    </NavLink>
                    <NavLink
                        // style={({ isActive }) => styledIfActive(isActive)}
                        to="/commands"
                    >
                        Commands
                    </NavLink>
                    <NavLink
                        // style={({ isActive }) => styledIfActive(isActive)}
                        to="/vods"
                    >
                        Vods
                    </NavLink>
                    <NavLink
                        // style={({ isActive }) => styledIfActive(isActive)}
                        to="/clip-compilations"
                    >
                        Compilations
                    </NavLink>
                </Tabs>
            </div>
            <Outlet />
        </div>
    );
}
