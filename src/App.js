// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SpaceDetail from "./pages/SpaceDetail";
import Blog from "./pages/Blog";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/space/:id" element={<SpaceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
