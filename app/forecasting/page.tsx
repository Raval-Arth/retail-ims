import type { Metadata } from "next"
import { Calendar, RefreshCw, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DemandForecast } from "@/components/demand-forecast"
import { SeasonalTrends } from "@/components/seasonal-trends"

export const metadata: Metadata = {
  title: "Demand Forecasting",
  description: "Predict future inventory needs based on historical data",
}

export default function ForecastingPage() {
  return (
    <div className="flex flex-col p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Demand Forecasting</h1>
        <div className="flex items-center gap-2">
        </div>
      </div>

      <Tabs defaultValue="demand" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="demand">Demand Forecast</TabsTrigger>
          <TabsTrigger value="seasonal">Seasonal Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="demand" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Demand Forecast</CardTitle>
              <CardDescription>
                Predicted inventory needs for the next 3 months based on historical sales data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DemandForecast />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Forecast Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92.5%</div>
                <p className="text-xs text-muted-foreground">Based on last 12 months of data</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Predicted Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+15.3%</div>
                <p className="text-xs text-muted-foreground">Compared to same period last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Recommended Purchase</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,500</div>
                <p className="text-xs text-muted-foreground">To meet predicted demand</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="seasonal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Seasonal Trends</CardTitle>
              <CardDescription>Historical seasonal patterns to help with inventory planning</CardDescription>
            </CardHeader>
            <CardContent>
              <SeasonalTrends />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Peak Season</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Nov-Dec</div>
                <p className="text-xs text-muted-foreground">+45% increase in demand</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Low Season</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Feb-Mar</div>
                <p className="text-xs text-muted-foreground">-20% decrease in demand</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Trending Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Electronics</div>
                <p className="text-xs text-muted-foreground">+35% growth this quarter</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

