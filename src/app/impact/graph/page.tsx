import Button from "../../../../components/Button";
import NavigationBar from "../../../../components/NavigationBar";
import EnergyGraph from "../../../../components/EnergyGraph";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import type { DataPoint } from "../../../../components/EnergyGraph";
import graphDataFile from "../../../../data/graphDataPoints.json";

const graphData = graphDataFile as DataPoint[];

export default function GraphPage() {
  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>
      <div className="h-full w-full flex items-center justify-center px-18 py-20">
        <div><EnergyGraph
          dataFile={graphData}
          color="#00C49F"
          title="Blockchain Energy Consumption"></EnergyGraph>
        </div>
      </div>
    </div>
  );
}