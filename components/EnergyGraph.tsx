"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface DataPoint {
  year: number;
  energy: number;
  description: string;
}


interface EnergyGraphProps {
  dataFile: DataPoint[];
  color?: string;
  title?: string;
}

export default function EnergyGraph({
  dataFile,
  color = "#8884d8",
  title = "Energy Consumption Over Time",
}: EnergyGraphProps) {
  return (
    <div className="flex flex-col items-center w-full text-white">
      <h2 className="text-3xl mb-6">{title}</h2>

      <div className="w-full max-w-5xl h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={dataFile}
            margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="5 5" stroke="#444" />
            <XAxis dataKey="year" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#2E2E2E",
                border: "none",
                color: "#fff",
              }}
              labelFormatter={(label) => `Year: ${label}`}
              formatter={(value: number, name, props) => [
                `${value} kWh`,
                props.payload.description,
              ]}
            />
            <Line
              type="monotone"
              dataKey="energy"
              stroke={color}
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 w-full max-w-3xl text-center">
        {dataFile.map((point, index) => (
          <p key={index} className="mb-2 text-sm md:text-base">
            <strong>{point.year}:</strong> {point.description}
          </p>
        ))}
      </div>
    </div>
  );
}
