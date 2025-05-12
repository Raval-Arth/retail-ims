'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

interface Product {
    id: string
    sku: string
    name: string
    category: string
    inStock: number
    reorderPoint: number
    unitPrice: number
}

interface CategoryStats {
    category: string
    totalItems: number
    totalValue: number
}

interface TopProduct {
    name: string
    sales: number
    revenue: number
}

export default function DashboardPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [categoryStats, setCategoryStats] = useState<CategoryStats[]>([])
    const [topProducts, setTopProducts] = useState<TopProduct[]>([])
    const [totalInventoryValue, setTotalInventoryValue] = useState(0)
    const [lowStockItems, setLowStockItems] = useState<Product[]>([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products')
            const data = await response.json()
            setProducts(data)
            calculateStats(data)
        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }

    const calculateStats = (products: Product[]) => {
        // Calculate category statistics
        const categoryMap = new Map<string, CategoryStats>()
        let totalValue = 0

        products.forEach(product => {
            const category = product.category
            const value = product.inStock * product.unitPrice
            totalValue += value

            if (!categoryMap.has(category)) {
                categoryMap.set(category, {
                    category,
                    totalItems: 0,
                    totalValue: 0
                })
            }

            const stats = categoryMap.get(category)!
            stats.totalItems += product.inStock
            stats.totalValue += value
        })

        setCategoryStats(Array.from(categoryMap.values()))
        setTotalInventoryValue(totalValue)

        // Calculate low stock items
        const lowStock = products.filter(product => product.inStock <= product.reorderPoint)
        setLowStockItems(lowStock)

        // Mock top selling products (in a real app, this would come from sales data)
        const mockTopProducts: TopProduct[] = products.slice(0, 5).map(product => ({
            name: product.name,
            sales: Math.floor(Math.random() * 100),
            revenue: Math.floor(Math.random() * 1000)
        }))
        setTopProducts(mockTopProducts)
    }

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            {/* Overview Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${totalInventoryValue.toFixed(2)}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{products.length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{lowStockItems.length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{categoryStats.length}</div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts */}
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Inventory by Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={categoryStats}
                                        dataKey="totalValue"
                                        nameKey="category"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        label
                                    >
                                        {categoryStats.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Top Selling Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={topProducts}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="sales" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Low Stock Items Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Low Stock Items</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>SKU</TableHead>
                                <TableHead>Product Name</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead className="text-center">In Stock</TableHead>
                                <TableHead className="text-center">Reorder Point</TableHead>
                                <TableHead className="text-right">Unit Price</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {lowStockItems.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">{product.sku}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell className="text-center">{product.inStock}</TableCell>
                                    <TableCell className="text-center">{product.reorderPoint}</TableCell>
                                    <TableCell className="text-right">${product.unitPrice.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
} 