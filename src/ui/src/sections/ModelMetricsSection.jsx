import React from "react";
import styled from "styled-components";
import ModelMetrics from "../plots/ModelMetrics";

const Wrapper = styled.div`
  text-align: left;
  padding: 0.25em 1em;
  margin: 1em;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.main};
`;
function ModelMetricsSection() {
  return (
    <Wrapper>
      <h2>7. Different Models' Metric Result</h2>
      <div className="BarPlot" style={{ height: 600 }}>
        <ModelMetrics />
      </div>
      <p>
        The above bar chart shows the metric result for different models that we
        used.
      </p>
    </Wrapper>
  );
}

export default ModelMetricsSection;
