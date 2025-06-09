import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);

 const products = [
  {
    id: 1,
    name: "Nike Air Max 270 Black shoes",
    price: 13500,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/przhlilttuqiis7no3rr/W+AIR+MAX+270.png"
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21 White shoes",
    price: 15000,
    image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/482606b2f42b4a7b886b01ff2fabaa74_9366/Adizero_EVO_SL_Shoes_White_JH6206_02_standard.jpg"
  },
  {
    id: 3,
    name: "Puma RS-X³ Black Shoes",
    price: 9500,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/391928/01/sv01/fnd/IND/fmt/png/RS-X-Triple-Sneakers"
  },
  {
    id: 4,
    name: "New Balance 574 Blue Shoes",
    price: 7200,
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20480360/2022/12/12/34858782-5f87-4608-9a5f-5468f9b03c611670826101777-New-Balance-Men-Casual-Shoes-7621670826101360-2.jpg"
  },
  {
    id: 5,
    name: "Skechers Go Walk 5 Grey Skechers",
    price: 5500,
    image: "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dwf92744c9/images/large/243000-1.jpg"
  },
  {
    id: 6,
    name: "Kellogg's Corn Flakes (18 oz)",
    price: 420,
    image: "https://i5.walmartimages.com/seo/Kellogg-s-Corn-Flakes-Original-Breakfast-Cereal-Family-Size-18-oz-Box_ac4c3424-b24b-446f-b509-a7838a69ee47.08674fa23e84d6f392ed01af65be996b.jpeg"
  },
  {
    id: 7,
    name: "Lay's Classic Potato Chips (9.75 oz)",
    price: 300,
    image: "https://i5.walmartimages.com/seo/Lay-s-Honey-BBQ-Flavored-Potato-Chips-7-5-oz-Bag_cc316e40-daac-4409-aa10-1bafb710eb77_1.e26ddfa908f86b540f58eaf83645f40f.jpeg"
  },
  {
    id: 8,
    name: "Coca-Cola (12-Pack, 12 fl oz cans)",
    price: 600,
    image: "https://m.media-amazon.com/images/I/71V3Fr0I7yL._SX679_PIbundle-12,TopRight,0,0_AA679SH20_.jpg"
  },
  {
    id: 9,
    name: "Ben & Jerry's Chocolate Chip Cookie Dough Ice Cream",
    price: 450,
    image: "https://shop.benjerry.com/cdn/shop/products/35670_US_IC_Choc-Chip-Cookie-Dough_473ml_FOP-1000x1000-5cf5f439-d10e-442b-97af-c7653877aa2f.png?v=1677669924&width=713"
  },
  {
    id: 10,
    name: "Quaker Oats Old Fashioned (42 oz)",
    price: 350,
    image: "https://m.media-amazon.com/images/I/51IgYhq7zQL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    id: 11,
    name: "Apple AirPods Pro (2nd Gen)",
    price: 24900,
    image: "https://m.media-amazon.com/images/I/61oCISLE+PL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 12,
    name: "Samsung Galaxy S23 Ultra",
    price: 129999,
    image: "https://m.media-amazon.com/images/I/71lD7eGdW-L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 13,
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 32990,
    image: "https://www.sony.co.in/image/4e4154f981a0c362a20d5a3eaea6605e?fmt=png-alpha&wid=676&hei=400"
  },
  {
    id: 14,
    name: "Amazon Echo Dot (5th Gen)",
    price: 4499,
    image: "https://m.media-amazon.com/images/I/5108OEjU5+L._SY300_SX300_.jpg"
  },
  {
    id: 15,
    name: "Logitech MX Master 3S Wireless Mouse",
    price: 8500,
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 16,
    name: "Vans Old Skool Classic High Top Sneaker",
    price: 5000,
    image: "https://m.media-amazon.com/images/I/512WogYKKZL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: 17,
    name: "Reebok Nano X1 Black Shoes",
    price: 11000,
    image: "https://www.reebok.com/cdn/shop/files/100074185_SLC_eCom-tif.png?v=1736437118&width=480"
  },
  {
    id: 18,
    name: "Converse Chuck Taylor All Star Black Low Top",
    price: 4500,
    image: "https://www.converse.in/media/wysiwyg/Low_Top_-_164224C-1.jpg?auto=webp&format=webp&quality=70"
  },
  {
    id: 19,
    name: "Heinz Tomato Ketchup (32 oz)",
    price: 350,
    image: "https://m.media-amazon.com/images/I/71oikmrVsJL._SX679_.jpg"
  },
  {
    id: 20,
    name: "Dove Men+Care Body Wash (22 oz)",
    price: 450,
    image: "https://rukminim2.flixcart.com/image/832/832/combo-kit/k/f/q/10011111561110-dove-men-care-hygiene-clean-comfort-original-imaep9tqbtykxcyp.jpeg?q=70"
  },
  {
    id: 21,
    name: "Tide Pods Laundry Detergent (81 ct)",
    price: 2100,
    image: "https://m.media-amazon.com/images/I/511jDgQ4qkL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    id: 22,
    name: "Apple iPad Air (5th Gen, 64GB)",
    price: 59900,
    image: "https://m.media-amazon.com/images/I/61qYkM2gvSL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 23,
    name: "Bose QuietComfort 45 Headphones",
    price: 27500,
    image: "https://m.media-amazon.com/images/I/51f7KKP25PL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 24,
    name: "GoPro HERO11 Black",
    price: 49999,
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/f/3/y/-original-imahyxtgqseqwhzr.jpeg?q=70"
  },
  {
    id: 25,
    name: "Anker PowerCore 20,000mAh Power Bank",
    price: 3800,
    image: "https://m.media-amazon.com/images/I/31s+5kNtJFL._SY300_SX300_.jpg"
  },
  {
    id: 26,
    name: "Dyson V15 Detect Vacuum",
    price: 59900,
    image: "https://m.media-amazon.com/images/I/71UCOGhhZKL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 27,
    name: "Instant Pot Duo 7-in-1 (6 qt)",
    price: 8300,
    image: "https://m.media-amazon.com/images/I/71WtwEvYDOS._SX679_.jpg"
  },
  {
    id: 28,
    name: "Fitbit Charge 5",
    price: 12500,
    image: "https://m.media-amazon.com/images/I/71hg6m6m50L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 29,
    name: "JBL Flip 6 Portable Speaker",
    price: 10800,
    image: "https://m.media-amazon.com/images/I/81MjIZM2H9L._SX522_.jpg"
  },
  {
    id: 30,
    name: "Kindle Paperwhite (16GB)",
    price: 12999,
    image: "https://m.media-amazon.com/images/I/61hPhRZx84L._AC_UY327_FMwebp_QL65_.jpg"
  }
];



return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header 
        search={search} 
        setSearch={setSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <ProductList 
        products={products} 
        search={search}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;