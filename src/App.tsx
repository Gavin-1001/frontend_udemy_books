import React from "react";


import "./App.css";
import { ExploreTopBooks } from "./layouts/HomePage/ExploreTopBooks";
import { Carousel } from "./layouts/HomePage/Carousel";
import Navbar from "./layouts/NavbarAndFooter/Navbar";


function App() {
  return (
    <div>

      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </div>
  );
}

export default App;
