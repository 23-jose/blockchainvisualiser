"use client";

import NavigationBar from "../../../../components/NavigationBar";
import EnergyGraph from "../../../../components/EnergyGraph";
import bitcoinData from "../../../../data/bitcoinGraphLine.json";
import ethereumData from "../../../../data/ethereumGraphLine.json";
import countryData from "../../../../data/countryConsumptionGraph.json";

export default function GraphPage() {
  return (
    <main className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar />

      <div className="h-full w-full flex flex-col items-center justify-center px-4 md:px-16 pt-20">
        <div className="text-4xl md:text-5xl pb-8">Energy Expenditure Over Time</div>
      </div>

      <div className="h-full w-full px-8 md:px-16 flex justify-center">
        <div className="w-full max-w-7xl">
          <EnergyGraph
            line={[
              { name: "Bitcoin", data: bitcoinData, color: "#F7931A" },
              { name: "Ethereum", data: ethereumData, color: "#1C1CFF" },
            ]}
            scatter={[
              { name: "Country Consumption", data: countryData, color: "#FFD900" },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
