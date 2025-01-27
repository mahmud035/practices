import React, { useState, useDeferredValue } from "react";

export const DeferredValueExample = () => {
  const [query, setQuery] = useState("");
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const deferredQuery = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items..."
      />
      {query !== deferredQuery && <p> Loading...</p>}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
