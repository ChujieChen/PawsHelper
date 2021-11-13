import React from "react";
import styled from "styled-components";
import AnimalOutcome from "../plots/AnimalOutcome";

const Wrapper = styled.div`
  text-align: left;
  padding: 0.25em 1em;
  margin: 1em;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.main};
`;
function AnimalOutcomeSection() {
    return (
        <Wrapper>
            <h2>2. Animal Outcome by Animal Types</h2>
            <div className="BarPlot" style={{ height: 600 }}>
                <AnimalOutcome />
            </div>
            <p>
                The above bar chart shows that dogs have a greater chance to be returned
                to owners compared with cats. And more cats are died even though we have
                more data rows with dogs.{" "}
            </p>
        </Wrapper>
    );
}

export default AnimalOutcomeSection;
