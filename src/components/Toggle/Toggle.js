import React, { useState } from 'react';

const Toggle = ({ label, defaultState, onToggle }) => {
  const [isToggled, setToggle] = useState(defaultState);

  const handleToggle = () => {
    setToggle(!isToggled);
    onToggle(!isToggled);
  };

  return (
    <label>
      <input type="checkbox" checked={isToggled} onChange={handleToggle} />
      <span>{label}</span>
    </label>
  );
};

export default Toggle;