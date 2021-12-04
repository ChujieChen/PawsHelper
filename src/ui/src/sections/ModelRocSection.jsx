import React from "react";
import styled from "styled-components";
import ModelRoc from "../plots/ModelRocPlot";

const Wrapper = styled.div`
  text-align: left;
  padding: 0.25em 1em;
  margin: 1em;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.main};
`;
function ModelRocSection() {
  return (
    <Wrapper>
      <h2>6. ROC curve</h2>
      <div className="BarPlot" style={{ height: 600 }}>
        <ModelRoc />
      </div>
      <p>
        The above line graph shows that Decision Tree algorithm and the Gradient
        Boosting Classifier algorithm performs better than the Logistic
        regression because Decision Tree and Gradient Boosting have higher area
        under the ROC curve.
      </p>
    </Wrapper>
  );
}

export default ModelRocSection;
