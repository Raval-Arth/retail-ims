"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    inventory: 4000,
    sales: 2400,
    forecast: 2600,
  },
  {
    name: "Feb",
    inventory: 3800,
    sales: 2210,
    forecast: 2300,
  },
  {
    name: "Mar",
    inventory: 4200,
    sales: 2290,
    forecast: 2400,
  },
  {
    name: "Apr",
    inventory: 3780,
    sales: 2000,
    forecast: 2100,
  },
  {
    name: "May",
    inventory: 3890,
    sales: 2181,
    forecast: 2200,
  },
  {
    name: "Jun",
    inventory: 4390,
    sales: 2500,
    forecast: 2550,
  },
  {
    name: "Jul",
    inventory: 4490,
    sales: 2800,
    forecast: 2700,
  },
  {
    name: "Aug",
    inventory: 4120,
    sales: 2600,
    forecast: 2650,
  },
  {
    name: "Sep",
    inventory: 3980,
    sales: 2380,
    forecast: 2400,
  },
  {
    name: "Oct",
    inventory: 4250,
    sales: 2780,
    forecast: 2800,
  },
  {
    name: "Nov",
    inventory: 4300,
    sales: 3000,
    forecast: 2900,
  },
  {
    name: "Dec",
    inventory: 4500,
    sales: 3200,
    forecast: 3100,
  },
]

export function Overview() {
  const { theme } = useTheme()

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
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
        <Bar dataKey="inventory" name="Inventory Level" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="sales" name="Actual Sales" fill="#2563eb" radius={[4, 4, 0, 0]} />
        <Bar dataKey="forecast" name="Forecasted Sales" fill="#f97316" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

