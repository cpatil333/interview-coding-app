import React, { useRef, useState } from "react";

const VirtualizedList = ({ items, itemHeight, height }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const totalHeight = items.length * itemHeight;
  const viewportRef = useRef(null);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    items.length - 1,
    startIndex + Math.ceil(height / itemHeight)
  );

  const visibleItems = items
    .slice(startIndex, endIndex + 1)
    .map((item, index) => (
      <div key={index} style={{ height: itemHeight }}>
        {item}
      </div>
    ));
  const handleScroll = () => {
    setScrollTop(viewportRef.ref.scrollTop);
  };

  return (
    <div>
      <h2>Virtualized List</h2>
      <div
        ref={viewportRef}
        onScroll={handleScroll}
        style={{ height, overflowY: "auto", position: "relative" }}
      >
        <div style={{ height: totalHeight, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: startIndex * itemHeight,
              width: "100%",
            }}
          >
            {visibleItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;
