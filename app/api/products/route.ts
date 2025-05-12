import { PrismaClient } from '@/lib/generated/prisma'
import { NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    try {
        const products = await prisma.product.findMany()
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching products' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const product = await prisma.product.create({
            data: {
                sku: body.sku,
                name: body.name,
                category: body.category,
                inStock: body.inStock,
                reorderPoint: body.reorderPoint,
                unitPrice: body.unitPrice,
            },
        })
        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json({ error: 'Error creating product' }, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
        }

        await prisma.product.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Product deleted successfully' })
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting product' }, { status: 500 })
    }
} 