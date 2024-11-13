import React, { useState } from "react";

const DropdownMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Dropdown Menu</h2>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      <br />
      {isOpen && (
        <ul style={{listStyle:"none"}}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
