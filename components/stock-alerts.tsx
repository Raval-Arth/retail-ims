import { Badge } from "@/components/ui/badge"

export function StockAlerts() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b pb-3">
        <div>
          <p className="font-medium">Wireless Headphones</p>
          <p className="text-sm text-muted-foreground">Electronics</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="destructive">Low Stock</Badge>
          <p className="text-sm font-medium">5 units</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-b pb-3">
        <div>
          <p className="font-medium">Organic Protein Powder</p>
          <p className="text-sm text-muted-foreground">Groceries</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="destructive">Low Stock</Badge>
          <p className="text-sm font-medium">3 units</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-b pb-3">
        <div>
          <p className="font-medium">Smart Watch</p>
          <p className="text-sm text-muted-foreground">Electronics</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="destructive">Low Stock</Badge>
          <p className="text-sm font-medium">2 units</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-b pb-3">
        <div>
          <p className="font-medium">Leather Wallet</p>
          <p className="text-sm text-muted-foreground">Accessories</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="destructive">Low Stock</Badge>
          <p className="text-sm font-medium">4 units</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Yoga Mat</p>
          <p className="text-sm text-muted-foreground">Sports & Fitness</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="destructive">Low Stock</Badge>
          <p className="text-sm font-medium">6 units</p>
        </div>
      </div>
    </div>
  )
}

