import React from "react";
import styled from "styled-components";
import IncomeOutcome from "../plots/IncomeOutcome";

const Wrapper = styled.div`
  text-align: left;
  padding: 0.25em 1em;
  margin: 1em;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.main};
`;
function IncomeOutcomeSection() {
  return (
    <Wrapper>
      <h2>3. Income_type vs. Outcome_type</h2>
      <div className="BarPlot" style={{ height: 600 }}>
        <IncomeOutcome />
      </div>
      <p>
        The above heapmap show the relationship between intake type and outcome
        type
      </p>
    </Wrapper>
  );
}

export default IncomeOutcomeSection;
