// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
import modelrocData from "../data/ModelRocData";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const ModelRocPlot = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={modelrocData}
    margin={{ top: 50, right: 110, bottom: 90, left: 60 }}
    xScale={{ type: "linear" }}
    curve="linear"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "False Positive Rate",
      legendOffset: 36,
      legendPosition: "middle"
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "True Positive Rate",
      legendOffset: -40,
      legendPosition: "middle"
    }}
    enableGridX={false}
    enableGridY={false}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={3}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 70,
        itemWidth: 95,
        itemHeight: 18,
        itemsSpacing: 75,
        symbolSize: 13,
        symbolShape: "circle",
        itemDirection: "top-to-bottom",
        itemTextColor: "#777",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);

export default ModelRocPlot;
