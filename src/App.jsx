import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Rating from "./components/Rating";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 p-15 ml-15">
        <Header />
        <Rating />
        <TestimonialCard />
      </div>
    </>
  );
}

export default App;
