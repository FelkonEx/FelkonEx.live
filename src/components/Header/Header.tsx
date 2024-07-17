import { Outlet, Link, NavLink } from "react-router-dom";

import "./Header.scss";
import Tabs from "components/Tabs/Tabs";
import PopoverDropdown from "components/PopoverDropdown/PopoverDropdown";
export default function Header() {
    // function styledIfActive(isActive: boolean) {
    //     return { color: isActive ? "orange" : "black" };
    // }

    return (
        <div className="header-container">
            <div className="header-links">
                <Tabs className="header-tabs">
                    <PopoverDropdown
                        name="Home"
                        linkTo="/"
                        options={[
                            { linkTo: "/#gamesplayed", title: "Games Played" }
                        ]}
                    ></PopoverDropdown>
                    <PopoverDropdown
                        name="Emotes"
                        linkTo="/emotes"
                        options={[
                            { linkTo: "/emotes#twitch", title: "Twitch" },
                            { linkTo: "/emotes#7tv", title: "7tv" }
                        ]}
                    ></PopoverDropdown>
                    <PopoverDropdown
                        name="Commands"
                        linkTo="/commands"
                        options={[
                            { linkTo: "/commands#user", title: "Custom" },
                            { linkTo: "/commands#links", title: "Link" },
                            { linkTo: "/commands#mods", title: "Moderator" }
                        ]}
                    ></PopoverDropdown>
                    <PopoverDropdown
                        name="Videos"
                        linkTo=""
                        options={[
                            { linkTo: "/vods", title: "VODs" },
                            {
                                linkTo: "/clip-compilations",
                                title: "Compilations"
                            }
                        ]}
                    ></PopoverDropdown>
                </Tabs>
            </div>
            <Outlet />
        </div>
    );
}
