import React from "react";

function PriceFilter({ selectedRange, onPriceChange }) {
  const priceRanges = [
    { label: "All", value: "all" },
    { label: "Below ₹5000", value: "below5000" },
    { label: "₹5000 - ₹10000", value: "5000to10000" },
    { label: "Above ₹10000", value: "above10000" },
  ];

  return (
    <div>
      {priceRanges.map((range) => (
        <label
          key={range.value}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            whiteSpace: "nowrap",
            fontSize: "16px",
          }}
        >
          <input
            type="radio"
            name="price"
            value={range.value}
            checked={selectedRange === range.value}
            onChange={(e) => onPriceChange(e.target.value)}
            style={{ marginRight: "8px" }}
          />
          {range.label}
        </label>
      ))}
    </div>
  );
}

export default PriceFilter;

