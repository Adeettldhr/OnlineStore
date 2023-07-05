"use client"
import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />

      <Footer/>
    </div>
  );
};

export default page;
