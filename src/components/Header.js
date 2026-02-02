// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // opcional para estilos

const Header = () => {
  return (
    <header style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "#fff" }}>
      <h1 style={{ display: "inline-block" }}>AR Livre Mapa</h1>
      <nav style={{ float: "right" }}>
        <Link to="/" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/blog" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
