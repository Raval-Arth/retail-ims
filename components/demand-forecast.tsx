"use client"

import { useTheme } from "next-themes"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", actual: 4000, forecast: 4200, lower: 3800, upper: 4600 },
  { month: "Feb", actual: 3800, forecast: 3900, lower: 3500, upper: 4300 },
  { month: "Mar", actual: 4200, forecast: 4100, lower: 3700, upper: 4500 },
  { month: "Apr", actual: 3780, forecast: 3800, lower: 3400, upper: 4200 },
  { month: "May", actual: 3890, forecast: 3950, lower: 3550, upper: 4350 },
  { month: "Jun", actual: 4390, forecast: 4300, lower: 3900, upper: 4700 },
  { month: "Jul", actual: 4490, forecast: 4400, lower: 4000, upper: 4800 },
  { month: "Aug", actual: 4120, forecast: 4200, lower: 3800, upper: 4600 },
  { month: "Sep", actual: 3980, forecast: 4100, lower: 3700, upper: 4500 },
  // Future months (forecast only)
  { month: "Oct", forecast: 4300, lower: 3900, upper: 4700 },
  { month: "Nov", forecast: 4800, lower: 4400, upper: 5200 },
  { month: "Dec", forecast: 5200, lower: 4800, upper: 5600 },
]

export function DemandForecast() {
  const { theme } = useTheme()

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value) => [`$${value}`, ""]}
            contentStyle={{
              backgroundColor: theme === "dark" ? "#1f2937" : "#fff",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} name="Actual Sales" />
          <Line
            type="monotone"
            dataKey="forecast"
            stroke="#f97316"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
            name="Forecast"
          />
          <Line
            type="monotone"
            dataKey="upper"
            stroke="#adfa1d"
            strokeWidth={1}
            strokeDasharray="3 3"
            dot={false}
            name="Upper Bound"
          />
          <Line
            type="monotone"
            dataKey="lower"
            stroke="#adfa1d"
            strokeWidth={1}
            strokeDasharray="3 3"
            dot={false}
            name="Lower Bound"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

