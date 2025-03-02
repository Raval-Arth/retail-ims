import type { Metadata } from "next"
import { ArrowUpDown, Download, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Inventory Management",
  description: "Manage your inventory levels and product stock",
}

export default function InventoryPage() {
  return (
    <div className="flex flex-col p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input placeholder="Search products..." className="w-full" type="search" />
          <Button type="submit" size="icon" variant="ghost">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            Sort
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SKU</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-center">In Stock</TableHead>
              <TableHead className="text-center">Reorder Point</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Unit Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">WH001</TableCell>
              <TableCell>Wireless Headphones</TableCell>
              <TableCell>Electronics</TableCell>
              <TableCell className="text-center">5</TableCell>
              <TableCell className="text-center">10</TableCell>
              <TableCell className="text-center">
                <Badge variant="destructive">Low Stock</Badge>
              </TableCell>
              <TableCell className="text-right">$129.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">OJ002</TableCell>
              <TableCell>Organic Juice</TableCell>
              <TableCell>Groceries</TableCell>
              <TableCell className="text-center">25</TableCell>
              <TableCell className="text-center">15</TableCell>
              <TableCell className="text-center">
                <Badge variant="success" className="bg-green-500 hover:bg-green-600">
                  In Stock
                </Badge>
              </TableCell>
              <TableCell className="text-right">$4.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">LS003</TableCell>
              <TableCell>Leather Shoes</TableCell>
              <TableCell>Footwear</TableCell>
              <TableCell className="text-center">12</TableCell>
              <TableCell className="text-center">8</TableCell>
              <TableCell className="text-center">
                <Badge variant="success" className="bg-green-500 hover:bg-green-600">
                  In Stock
                </Badge>
              </TableCell>
              <TableCell className="text-right">$89.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">KB004</TableCell>
              <TableCell>Kitchen Blender</TableCell>
              <TableCell>Home Appliances</TableCell>
              <TableCell className="text-center">8</TableCell>
              <TableCell className="text-center">5</TableCell>
              <TableCell className="text-center">
                <Badge variant="success" className="bg-green-500 hover:bg-green-600">
                  In Stock
                </Badge>
              </TableCell>
              <TableCell className="text-right">$49.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">YM005</TableCell>
              <TableCell>Yoga Mat</TableCell>
              <TableCell>Sports & Fitness</TableCell>
              <TableCell className="text-center">6</TableCell>
              <TableCell className="text-center">10</TableCell>
              <TableCell className="text-center">
                <Badge variant="destructive">Low Stock</Badge>
              </TableCell>
              <TableCell className="text-right">$29.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">SW006</TableCell>
              <TableCell>Smart Watch</TableCell>
              <TableCell>Electronics</TableCell>
              <TableCell className="text-center">2</TableCell>
              <TableCell className="text-center">8</TableCell>
              <TableCell className="text-center">
                <Badge variant="destructive">Low Stock</Badge>
              </TableCell>
              <TableCell className="text-right">$199.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">OP007</TableCell>
              <TableCell>Organic Protein Powder</TableCell>
              <TableCell>Groceries</TableCell>
              <TableCell className="text-center">3</TableCell>
              <TableCell className="text-center">6</TableCell>
              <TableCell className="text-center">
                <Badge variant="destructive">Low Stock</Badge>
              </TableCell>
              <TableCell className="text-right">$39.99</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

