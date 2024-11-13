import React, { useState } from "react";

const SearchBar = ({ items }) => {
  const [query, setQuery] = useState("");

  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search...."
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <ul style={{listStyle:"none"}}>
        {filterItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
