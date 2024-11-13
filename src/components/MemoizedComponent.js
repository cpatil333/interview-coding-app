import React, { useState, useMemo } from "react";

const MemoizedComponent = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const computedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <h2>Count : {count}</h2>
      <h2>Computed value : {computedValue}</h2>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MemoizedComponent;
