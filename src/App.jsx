import React from "react";
import PostsList from "./components/PostsList";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="item/:id" element={<ProductPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
