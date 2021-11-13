import React from "react";
import styled from "styled-components";
import AnimalTypeCounts from "../plots/AnimalTypeCounts";

const Wrapper = styled.div`
  text-align: left;
  padding: 0.25em 1em;
  margin: 1em;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.main};
`;
function AnimalTypeCountsSection() {
    return (
        <Wrapper>
            <h2>1. Animal Type Counts</h2>
            <div className="PiePlot" style={{ height: 400 }}>
                <AnimalTypeCounts />
            </div>
            <p>
                The above pie chart shows that most animals in our dataset are dogs and
                cats.
            </p>
        </Wrapper>
    );
}

export default AnimalTypeCountsSection;
