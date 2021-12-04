import "./styles.css";
import React from "react";
import AnimalTypeCountsSection from "./sections/AnimalTypeCountsSection";
import AnimalOutcomeSection from "./sections/AnimalOutcomeSection";
import IncomeOutcomeSection from "./sections/IncomeOutcomeSection";
import SexTypeCountSection from "./sections/SexTypeCountSection";
import HasNameSection from "./sections/HasNameSection";
import ModelRocSection from "./sections/ModelRocSection";
import ModelMetricsSection from "./sections/ModelMetricsSection";

export default function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Team 11 - PawsHelper</h1>
        <h3>
          Chen Wang, Chujie Chen, Tongshu Yang, Xinyu Chen, Xueting Feng, Zhe
          Zhang
        </h3>
        <h2> Want to predict adoption rate for an animal? </h2>
        <h3> Click on the image below to try it out! </h3>
        <a href="https://animal-adoption-prediction.herokuapp.com/">
          <img
            src="https://media.istockphoto.com/vectors/black-and-white-simple-logo-with-animal-paw-in-heart-vector-id1163776016?k=20&m=1163776016&s=612x612&w=0&h=XytN34IUy7wIKPxWrUE91-bM7Pr9n57froNXmRxK2jU="
            alt="animal adoption predict"
          ></img>
        </a>
        <h2> ~Visualization of Our Dataset and Model~ </h2>
      </div>
      <AnimalTypeCountsSection />
      <AnimalOutcomeSection />
      <IncomeOutcomeSection />
      <SexTypeCountSection />
      <HasNameSection />
      <ModelRocSection />
      <ModelMetricsSection />
    </div>
  );
}
