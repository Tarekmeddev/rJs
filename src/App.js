import React, { useState } from "react";
import "./App.css";
import Header from "./components/Navbar/Header.js";
import Meme from "./components/Meme/Meme";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Meme />
      </div>
    </>
  );
}
