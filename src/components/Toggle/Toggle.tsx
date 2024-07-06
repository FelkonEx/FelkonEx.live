import React, { useState } from "react";

type ToggleProps = {
    label: string;
    defaultState: boolean;
    onToggle: Function;
};

const Toggle = ({ label, defaultState, onToggle }: ToggleProps) => {
    const [isToggled, setToggle] = useState<boolean>(defaultState);

    const handleToggle = () => {
        setToggle(!isToggled);
        onToggle(!isToggled);
    };

    return (
        <label>
            <input
                type="checkbox"
                checked={isToggled}
                onChange={handleToggle}
            />
            <span>{label}</span>
        </label>
    );
};

export default Toggle;
