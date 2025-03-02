"use client"

import { useTheme } from "next-themes"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Electronics", value: 35, color: "#2563eb" },
  { name: "Clothing", value: 25, color: "#f97316" },
  { name: "Home Goods", value: 15, color: "#adfa1d" },
  { name: "Beauty", value: 10, color: "#ec4899" },
  { name: "Groceries", value: 15, color: "#14b8a6" },
]

export function InventoryStatus() {
  const { theme } = useTheme()

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value}%`, "Inventory Share"]}
            contentStyle={{
              backgroundColor: theme === "dark" ? "#1f2937" : "#fff",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

