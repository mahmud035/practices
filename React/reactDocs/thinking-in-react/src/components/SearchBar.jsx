import React from 'react';

const SearchBar = ({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly,
}) => {
  return (
    <div>
      <form>
        <input
          onChange={(e) => setFilterText(e.target.value)}
          type="text"
          value={filterText}
          placeholder="Search..."
        />
        <label htmlFor="">
          <input type="checkbox" checked={inStockOnly} />
          Only show products in stock
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
