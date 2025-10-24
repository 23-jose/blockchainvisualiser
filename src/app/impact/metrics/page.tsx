"use client";

import NavigationBar from "../../../../components/NavigationBar";
import MetricsCard from "../../../../components/MetricsCard";
import { useState } from "react";
import metricsData from "../../../../data/metricsData.json";

type Metric = {
  title: string;
  value: string;
  description: string;
};  

type MetricsData = {
  [mode: string]: Metric[];
};  

export default function MetricsPage() {

  const data: MetricsData = metricsData as MetricsData;

  const modes = Object.keys(data);
  const [mode, setMode] = useState<string>(modes[0]);
  
  const currentMetrics = data[mode] || [];


  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>

      <div className="w-full max-w-7xl mx-auto flex justify-center px-8 md:px-12 pt-20 pb-12">
        <div className="flex gap-4 rounded-full p-2 bg-[#3A3A3A] shadow-md w-full max-w-lg justify-center">
          {modes.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 min-w-[100px] max-w-[160px] py-3 rounded-full font-semibold text-lg transition-all ${
                mode === m
                  ? 'bg-[#FFD900] text-black'
                  : 'bg-[#212121] text-white hover:bg-[#FFD900] hover:text-black'
              }`}
            >
              {m}
            </button>
          ))}
          <button
            disabled
            className="flex-1 min-w-[100px] max-w-[160px] py-3 rounded-full font-semibold text-lg bg-[#212121] text-white cursor-default opacity-70"
          >
            ...
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-24 pb-12 max-w-7xl mx-auto place-items-center">
        {currentMetrics.map((metric, index) => (
          <MetricsCard key={index} title={metric.title} value={metric.value} description={metric.description}/>))}
      </div>
    </div>
  );
}