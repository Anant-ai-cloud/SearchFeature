import React from "react";
  function ProductCard({ product }) {
  return (
    <div style={styles.card} >
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1rem",
    margin: "1rem",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",       // ensures all images fit card width
    height: "200px",     // fixed height for uniformity
    objectFit: "cover",  // crops overflow, maintains aspect
    borderRadius: "8px",
    marginBottom: "10px"
  }

};

export default ProductCard;








