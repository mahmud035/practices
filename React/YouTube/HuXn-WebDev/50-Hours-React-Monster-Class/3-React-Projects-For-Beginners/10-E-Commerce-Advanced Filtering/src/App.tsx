import { useState } from 'react';
import Navigation from './Navigation/Navigation';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import data from './db/data';
import { IShoe } from './types/shoeTypes';

export default function App() {
  // State variables for search query and filtering criteria
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  // Handler for search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handler for category filter change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  // Handler for price filter change
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPrice(e.target.value);
  };

  // Handler for color filter change
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };

  // Handler for company filter change
  const handleCompanyChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCompany((e.target as HTMLButtonElement).value);
  };

  // Filter products based on selected filters
  const filteredData = data.filter((shoe: IShoe) => {
    // Check if the shoe title matches the search query
    const matchesSearch = shoe.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Check if the shoe category matches the selected category
    const matchesCategory =
      !selectedCategory || shoe.category === selectedCategory;

    // Check if the shoe color matches the selected color
    const matchesColor = !selectedColor || shoe.color === selectedColor;

    // Check if the shoe company matches the selected company
    const matchesCompany = !selectedCompany || shoe.company === selectedCompany;

    // Check if the shoe price falls within the selected price range
    const matchesPrice =
      !selectedPrice ||
      (() => {
        // Extract numeric value from the price string (e.g., "$200" -> 200)
        const price = parseFloat(shoe.newPrice.replace(/[^0-9.]/g, ''));

        switch (selectedPrice) {
          case '50':
            return price <= 50;
          case '100':
            return price > 50 && price <= 100;
          case '150':
            return price > 100 && price <= 150;
          case '200':
            return price > 150;
          default:
            return true; // If no price filter is selected, include all products
        }
      })();

    // Return true only if all conditions are met
    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesColor &&
      matchesCompany
    );
  });

  return (
    <>
      {/* Sidebar for category, price, and color filters */}
      <Sidebar
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
        onColorChange={handleColorChange}
      />

      {/* Navigation bar for search input */}
      <Navigation
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {/* Recommended section for company filters */}
      <Recommended onCompanyChange={handleCompanyChange} />

      {/* Display filtered products */}
      <Products products={filteredData} />
    </>
  );
}
