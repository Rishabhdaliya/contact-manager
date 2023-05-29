import React from "react";
import { ResponsiveLine } from "@nivo/line";

interface DataPoint {
  x: string | number;
  y: number;
}

interface LineChartProps {
  finalData: {
    id: string;
    color: string;
    data: {
      x: string;
      y: any;
    }[];
  }[];
}

const LineChart: React.FC<LineChartProps> = ({ finalData }) => {
  return (
    <div style={{ height: "400px" }}>
      <ResponsiveLine
        data={finalData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "X Axis",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Y Axis",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "nivo" }}
        pointSize={5}
        pointColor={{ theme: "background" }}
        pointBorderWidth={1}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        enableSlices="x"
        animate={true}
        // motionStiffness={120}
        // motionDamping={15}
      />
    </div>
  );
};

export default LineChart;
