import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(null);

  return (
    <div>
      <h2>Toggle Switch</h2>
      <br />
      <h2>Toggle is : {isOn ? "On" : "Off"}</h2>
      <br />
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
};

export default ToggleSwitch;
