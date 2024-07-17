// import {Counter} from "components";
import { ReactNode, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

import "./PopoverDropdown.scss";

type DropDownProps = {
    name: string;
    linkTo?: string;
    options: Array<TabLinkProps>;
};

type TabLinkProps = {
    linkTo: string;
    title: string;
    className?: string;
};

export default function PopoverDropdown({
    name,
    linkTo,
    options
}: DropDownProps) {
    const location = useLocation();

    const fullLocation = `${location.pathname}${location.hash}`;

    const currentLocation = (linkToFind: string): boolean => {
        return linkToFind === fullLocation;
    };

    const currentLocationToFind = (): boolean => {
        return (
            options.flatMap((option) => option.linkTo).indexOf(fullLocation) !=
                -1 || linkTo === fullLocation
        );
    };

    let renderOptions = () => {
        return options.map((option) => {
            return (
                <NavLink
                    className={dropdownOptionClasses(option.linkTo)}
                    to={option.linkTo}
                    end
                >
                    {option.title}
                </NavLink>
            );
        });
    };
    const [visibleOptions, setVisibleOptions] = useState(false);

    const dropdownOptionClasses = (linkTo: string) =>
        classNames(
            "dropdown-option",
            !visibleOptions && "hidden",
            currentLocation(linkTo) && "active-tab"
        );

    const dropdownNameClasses = () =>
        classNames("dropdown-option", currentLocationToFind() && "active-tab");

    return (
        <div
            className="dropdown-container"
            onMouseEnter={() => setVisibleOptions(true)}
            onMouseLeave={() => setVisibleOptions(false)}
        >
            <div className="dropdown-container-expand">
                <div className="dropdown-option-main">
                    {linkTo ? (
                        <NavLink
                            to={linkTo || ""}
                            className={dropdownNameClasses()}
                        >
                            {name}
                        </NavLink>
                    ) : (
                        <div className={dropdownNameClasses()}>
                            <span>{name}</span>
                        </div>
                    )}
                </div>
                {options && (
                    <div className="dropdown-options">{renderOptions()}</div>
                )}
            </div>
        </div>
    );
}
