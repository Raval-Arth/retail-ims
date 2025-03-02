import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Product" />
          <AvatarFallback>WH</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Wireless Headphones</p>
          <p className="text-sm text-muted-foreground">Electronics</p>
        </div>
        <div className="ml-auto font-medium">
          <p className="text-green-500">+$1,999.00</p>
          <p className="text-xs text-muted-foreground">42 units</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Product" />
          <AvatarFallback>OJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Organic Juice</p>
          <p className="text-sm text-muted-foreground">Groceries</p>
        </div>
        <div className="ml-auto font-medium">
          <p className="text-green-500">+$1,245.80</p>
          <p className="text-xs text-muted-foreground">156 units</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Product" />
          <AvatarFallback>LS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Leather Shoes</p>
          <p className="text-sm text-muted-foreground">Footwear</p>
        </div>
        <div className="ml-auto font-medium">
          <p className="text-green-500">+$799.00</p>
          <p className="text-xs text-muted-foreground">28 units</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Product" />
          <AvatarFallback>KB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Kitchen Blender</p>
          <p className="text-sm text-muted-foreground">Home Appliances</p>
        </div>
        <div className="ml-auto font-medium">
          <p className="text-green-500">+$699.00</p>
          <p className="text-xs text-muted-foreground">19 units</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Product" />
          <AvatarFallback>YM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Yoga Mat</p>
          <p className="text-sm text-muted-foreground">Sports & Fitness</p>
        </div>
        <div className="ml-auto font-medium">
          <p className="text-green-500">+$599.00</p>
          <p className="text-xs text-muted-foreground">35 units</p>
        </div>
      </div>
    </div>
  )
}

