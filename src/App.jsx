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
      <div className="flex flex-col p-8 md:grid md:grid-cols-2 md:ml-10 md:px-20 md:pt-5">
        <Header />
        <Rating />
        <TestimonialCard />
      </div>
    </>
  );
}

export default App;
