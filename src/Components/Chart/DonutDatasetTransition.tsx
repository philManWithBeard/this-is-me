import { useState } from "react";
import {Data1}  from "./Data/data1.tsx";
import {Data2} from "./Data/data2.tsx";
import { DonutChart } from "./DonutChart.tsx";
import "../../index.css"
const BUTTONS_HEIGHT = 50;

type DonutDatasetTransitionProps = {
  width: number;
  height: number;
};

const buttonStyle = {
  border: "1px solid #ffffff",
  borderRadius: "10px",
  padding: "0px 10px",
  margin: "1px 50px",
  fontSize: 20,
  color: "#ffffff",
  opacity: 0.7,
};

export const DonutDatasetTransition = ({
  width,
  height,
}: DonutDatasetTransitionProps) => {
  const [selectedData, setSelectedData] = useState(Data2);

  return (
    <div>
      <div style={{ height: BUTTONS_HEIGHT }}>
        <button id="statButton"style={buttonStyle} onClick={() => setSelectedData(Data1)}>
          Past: 2003
        </button>
        <button id="statButton" style={buttonStyle} onClick={() => setSelectedData(Data2)}>
          Present: 2023
        </button>
      </div>
      <p></p>
      <DonutChart
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  );
};
