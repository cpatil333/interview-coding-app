import React, { useState } from "react";

const TabsComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? "active" : ""} style={{backgroundColor:"lightgreen", margin:"10px"}}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content" style={{border:"2px solid black", alignItems:"center"}}> {tabs[activeTab].content}</div>
    </div>
  );
};

export default TabsComponent;
