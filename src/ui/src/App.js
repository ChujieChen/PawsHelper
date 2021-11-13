import "./styles.css";
import React from "react";
import AnimalTypeCountsSection from "./sections/AnimalTypeCountsSection";
import AnimalOutcomeSection from "./sections/AnimalOutcomeSection";

export default function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Team 11 - PawsHelper</h1>
        <h3>
          Chen Wang, Chujie Chen, Tongshu Yang, Xinyu Chen, Xueting Feng, Zhe
          Zhang
        </h3>
      </div>
      <AnimalTypeCountsSection />
      <AnimalOutcomeSection />
    </div>
  );
}
