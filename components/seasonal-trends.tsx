"use client"

import { useTheme } from "next-themes"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", electronics: 4000, clothing: 2400, homeGoods: 1800, beauty: 1200, groceries: 3200 },
  { month: "Feb", electronics: 3500, clothing: 2100, homeGoods: 1600, beauty: 1100, groceries: 3000 },
  { month: "Mar", electronics: 3700, clothing: 2300, homeGoods: 1700, beauty: 1300, groceries: 3100 },
  { month: "Apr", electronics: 4200, clothing: 2800, homeGoods: 2000, beauty: 1500, groceries: 3300 },
  { month: "May", electronics: 4500, clothing: 3200, homeGoods: 2200, beauty: 1700, groceries: 3400 },
  { month: "Jun", electronics: 4700, clothing: 3500, homeGoods: 2400, beauty: 1900, groceries: 3600 },
  { month: "Jul", electronics: 4900, clothing: 3700, homeGoods: 2600, beauty: 2100, groceries: 3800 },
  { month: "Aug", electronics: 5200, clothing: 4000, homeGoods: 2800, beauty: 2300, groceries: 4000 },
  { month: "Sep", electronics: 5000, clothing: 3800, homeGoods: 2700, beauty: 2200, groceries: 3900 },
  { month: "Oct", electronics: 5500, clothing: 4200, homeGoods: 3000, beauty: 2500, groceries: 4100 },
  { month: "Nov", electronics: 6500, clothing: 5000, homeGoods: 3500, beauty: 3000, groceries: 4500 },
  { month: "Dec", electronics: 7500, clothing: 5800, homeGoods: 4000, beauty: 3500, groceries: 5000 },
]

export function SeasonalTrends() {
  const { theme } = useTheme()

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
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
          <Area type="monotone" dataKey="electronics" stackId="1" stroke="#2563eb" fill="#2563eb" />
          <Area type="monotone" dataKey="clothing" stackId="1" stroke="#f97316" fill="#f97316" />
          <Area type="monotone" dataKey="homeGoods" stackId="1" stroke="#adfa1d" fill="#adfa1d" />
          <Area type="monotone" dataKey="beauty" stackId="1" stroke="#ec4899" fill="#ec4899" />
          <Area type="monotone" dataKey="groceries" stackId="1" stroke="#14b8a6" fill="#14b8a6" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

