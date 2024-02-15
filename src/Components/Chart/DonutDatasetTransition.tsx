import { useState } from "react";
import {Data1}  from "./Data/data1.tsx";
import {Data2} from "./Data/data2.tsx";
import { DonutChart } from "./DonutChart.tsx";

const BUTTONS_HEIGHT = 50;

type DonutDatasetTransitionProps = {
  width: number;
  height: number;
};

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "0px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
  opacity: 0.7,
};

export const DonutDatasetTransition = ({
  width,
  height,
}: DonutDatasetTransitionProps) => {
  const [selectedData, setSelectedData] = useState(Data1);

  return (
    <div>
      <div style={{ height: BUTTONS_HEIGHT }}>
        <button style={buttonStyle} onClick={() => setSelectedData(Data1)}>
          Past: 2000
        </button>
        <button style={buttonStyle} onClick={() => setSelectedData(Data2)}>
          Present: 2023
        </button>
      </div>
      <DonutChart
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  );
};
