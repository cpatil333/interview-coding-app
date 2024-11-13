import React, { useState } from "react";

const RealTimeSearchFilter = ({ items }) => {
  const [query, setQuery] = useState("");

  const searchFilter = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Real- Time Search Filter</h2>
      <input
        type="text"
        placeholder="Search...."
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <ul>
        {searchFilter.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeSearchFilter;
