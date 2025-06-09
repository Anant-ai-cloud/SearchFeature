// import React from "react";

// function Header({ search, setSearch }) {
//   return (
//     <header style={styles.header}>
//       <h2 style={styles.logo}>ShopKaro</h2>
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={styles.search}
//       />
//     </header>
//   );
// }

// const styles = {
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "1rem",
//     // background: "#f5f5f5",
//     background: "000000",
//     borderBottom: "1px solid #ccc"
  
//   },
//   logo: {
//     margin: 0
//   },
//   search: {
//     padding: "0.5rem",
//     width: "200px"
//   }
// };

// export default Header;
  
// import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

// function Header({ search, setSearch, darkMode, setDarkMode }) {
//   return (
//     <header className={`header ${darkMode ? "dark" : "light"}`}>
//       <div className="logo">ShopKaro</div>
      
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Dark/Light Mode Toggle Button */}
//       <button 
//         className="theme-toggle"
//         onClick={() => setDarkMode(!darkMode)}
//         aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//       >
//         {darkMode ? <FaSun /> : <FaMoon />}
//       </button>
//     </header>
//   );
// }

// export default Header;

// Attempt to toggle dark light mode
import { FaSun, FaMoon } from "react-icons/fa";

function Header({ search, setSearch, darkMode, setDarkMode }) {
  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
       <h1 className="logo">ShopKaro</h1>
       

      
  <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}

export default Header;