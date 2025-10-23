"use client";

import {
  ComposedChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Scatter,
} from "recharts";

export interface DataPoint {
  year: number;
  energy: number;
  description: string;
}

interface LineData {
  name: string;
  data: DataPoint[];
  color: string;
}

interface ScatterData {
  name: string;
  data: DataPoint[];
  color: string;
}

interface EnergyGraphProps {
  line: LineData[];
  scatter: ScatterData[];
}

export default function EnergyGraph({ line = [], scatter = [] }: EnergyGraphProps) {
  const allPoints = [...line.flatMap(l => l.data), ...scatter.flatMap(s => s.data)];
  const minYear = Math.min(...allPoints.map(p => p.year));
  const maxYear = Math.max(...allPoints.map(p => p.year));

  // Combine series for tooltip mapping
  const seriesMap = [...line, ...scatter];

  return (
    <div className="flex flex-col items-center w-full text-white">
      <div className="w-full max-w-5xl h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="5 5" stroke="#444" />
            <XAxis
              type="number"
              dataKey="year"
              domain={[minYear, maxYear]}
              tickCount={allPoints.length}
              stroke="#fff"
            />
            <YAxis stroke="#fff" />
            
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div
                      style={{
                        backgroundColor: "#2E2E2E",
                        border: "none",
                        padding: "8px",
                        color: "#fff",
                      }}
                    >
                      <strong>Year: {label}</strong>
                      {payload.map((p) => {
                        const series = seriesMap.find(s => s.name === p.name);
                        const point = series?.data.find(d => d.year === p.payload.year);
                        return (
                          <div key={p.name}>
                            <span style={{ color: p.color }}>{p.name}</span>: {point?.energy}{" "}
                            {point?.description ? `- ${point.description}` : ""}
                          </div>
                        );
                      })}
                    </div>
                  );
                }
                return null;
              }}
            />

            {line.map((series) => (
              <Line
                key={series.name}
                type="monotone"
                data={series.data}
                dataKey="energy"
                name={series.name}
                stroke={series.color}
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            ))}

            {scatter.map((series) => (
              <Scatter
                key={series.name}
                data={series.data}
                name={series.name}
                dataKey="energy"
                fill={series.color}
                r={8}            
                cursor="pointer"
              />
            ))}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 w-full max-w-3xl text-center">
        {seriesMap.map((series) =>
          series.data.map((point, idx) => (
            <p key={`${series.name}-${idx}`} className="mb-2 text-sm md:text-base">
              <strong>{point.year} ({series.name}):</strong> {point.description}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
