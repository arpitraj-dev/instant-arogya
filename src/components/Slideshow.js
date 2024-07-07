// src/components/Slideshow.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../images/slideshow1.webp";
import image2 from "../images/slideshow2.webp";
import image3 from "../images/slideshow3.webp";
import image4 from "../images/slideshow4.webp";
import image5 from "../images/slideshow5.webp";
import sc1 from "../images/SC1.webp";
import sc2 from "../images/SC2.webp";
import sc3 from "../images/SC3.webp";
import sc4 from "../images/SC4.webp";
import sc5 from "../images/SC5.webp";
import sc6 from "../images/SC6.webp";

const products = [
  { img: sc1, desc: "2Baconil 2mg Nicotine Icy Mint", price: "Rs 65.1" },
  { img: sc2, desc: "2Baconil 2mg Chewing Gum", price: "Rs 65.1" },
  { img: sc3, desc: "2Baconil TTS20 14mg/24h", price: "Rs 800" },
  { img: sc4, desc: "2Baconil TTS10 7mg/24h", price: "Rs 716" },
  { img: sc5, desc: "2Baconil TTS30 21mg Patches", price: "Rs 1008" },
  { img: sc6, desc: "2Baconil TTS30 Nicotine 21mg/24h", price: "Rs 857" },
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const images = [image1, image2, image3, image4, image5];

  const navigate = (direction) => {
    if (direction === "prev") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images.length - 1
      );
    } else if (direction === "next") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.desc} added to cart`);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => navigate("prev")}
          style={{
            background: "none",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          &#8249;
        </button>
        <Link to="/newpage">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
            style={{
              maxWidth: "100%",
              maxHeight: "400px",
              margin: "0 1rem",
            }}
          />
        </Link>
        <button
          onClick={() => navigate("next")}
          style={{
            background: "none",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          &#8250;
        </button>
      </div>
      <div style={{ marginTop: "1rem", padding: "1rem" }}>
        <strong style={{ fontSize: "2rem", display: "block" }}>
          Smoking Cessation with 2baconil
        </strong>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                width: "15%",
                margin: "1rem",
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <img
                src={product.img}
                alt={`SC${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
              <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                {product.desc}
              </p>
              <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                {product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
