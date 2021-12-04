// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/heatmap
import { ResponsiveHeatMap } from "@nivo/heatmap";
import incomeOutcomeData from "../data/incomeOutcomeData";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const incomeOutcome = ({ data /* see data tab */ }) => (
  <ResponsiveHeatMap
    data={incomeOutcomeData}
    keys={[
      "Abandoned",
      "Euthanasia Request",
      "Owner Surrender",
      "Public Assist",
      "Stray",
      "Wildlife"
    ]}
    indexBy="outcome_type"
    margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
    // forceSquare={true}
    colors="RdBu"
    minValue={100}
    maxValue={800}
    padding={3}
    axisBottom={{
      orient: "bottom",
      tickSize: 0,
      tickPadding: 5,
      tickRotation: -45,
      legend: "income_type",
      legendPosition: "middle",
      legendOffset: 80
    }}
    axisRight={null}
    axisTop={null}
    axisLeft={{
      orient: "left",
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: "outcome_type",
      legendPosition: "middle",
      legendOffset: -80
    }}
    cellOpacity={1}
    cellBorderColor={{ from: "color", modifiers: [["darker", "0.5"]] }}
    labelTextColor="#ffffff"
    defs={[
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(0, 0, 0, 0.1)",
        rotation: -45,
        lineWidth: 4,
        spacing: 7
      }
    ]}
    fill={[{ id: "lines" }]}
    animate={true}
    motionConfig="molasses"
    motionStiffness={80}
    motionDamping={9}
    hoverTarget="cell"
    cellHoverOthersOpacity={0.25}
  />
);

export default incomeOutcome;
