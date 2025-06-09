import React, { useState } from "react";
import ProductCard from "./ProductCard";
import PriceFilter from "./PriceFilter";
import { motion } from "framer-motion";
import "./ProductList.css"; // New CSS file for styles

function ProductList({ products, search, darkMode }) {
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  // Apply filters (your existing logic)
  const searched = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const filtered = searched.filter((product) => {
    if (selectedPriceRange === "below5000") return product.price < 5000;
    if (selectedPriceRange === "5000to10000") return product.price >= 5000 && product.price <= 10000;
    if (selectedPriceRange === "above10000") return product.price > 10000;
    return true;
  });

  return (
    <div className="product-list-container">
      {/* Sidebar - now with dark mode support */}
      <div className={`sidebar ${darkMode ? "dark" : "light"}`}>
        <h3>Filter by Price</h3>
        <PriceFilter
          selectedRange={selectedPriceRange}
          onPriceChange={setSelectedPriceRange}
          darkMode={darkMode}
        />
      </div>

      {/* Products Grid - with new features */}
      <div className="product-grid">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className=  {`motion-card ${darkMode ? "dark" : "light"}`}
            >
              <ProductCard 
                product={product} 
                darkMode={darkMode}
              />
            </motion.div>
          ))
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;