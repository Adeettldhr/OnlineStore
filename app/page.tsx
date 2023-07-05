"use client";
import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";
import Home from "./UI/Home";
import Cart from "./pages/Carts/page";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SearchPage from "./pages/SearchPage";

const page = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product-details" element={<ProductDetailsPage />}></Route>
        <Route path="/search-page" element={<SearchPage />}></Route>
      </Routes>
      <Footer />
    </Provider>
  );
};

export default page;
