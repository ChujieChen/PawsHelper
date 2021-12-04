import React from "react";
import styled from "styled-components";
import SexTypeCount from "../plots/SexTypeCount";

const Wrapper = styled.div`
  text-align: left;
  padding: 0.25em 1em;
  margin: 1em;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.main};
`;
function SexTypeCountSection() {
  return (
    <Wrapper>
      <h2>4. SexTypeCount</h2>
      <div className="BarPlot" style={{ height: 600 }}>
        <SexTypeCount />
      </div>
      <p>
        The above heapmap show the relationship between intake type and outcome
        type
      </p>
    </Wrapper>
  );
}

export default SexTypeCountSection;
