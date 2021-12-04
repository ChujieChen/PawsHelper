import React from "react";
import styled from "styled-components";
import HasNamePlot from "../plots/HasNamePlot";

const Wrapper = styled.div`
  text-align: left;
  padding: 0.25em 1em;
  margin: 1em;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.main};
`;
function HasNameSection() {
  return (
    <Wrapper>
      <h2>5. Animal Outcome by Animal Name Feature</h2>
      <div className="BarPlot" style={{ height: 600 }}>
        <HasNamePlot />
      </div>
      <p>
        The above bar chart shows that the animals with name are more likely
        adopted.{" "}
      </p>
    </Wrapper>
  );
}

export default HasNameSection;
