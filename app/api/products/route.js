import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const limit = parseInt(searchParams.get('limit') || '20')
  
  const where = category ? { category: { contains: category, mode: 'insensitive' } } : {}
  
  const products = await prisma.product.findMany({
    where,
    take: limit,
    orderBy: { createdAt: 'desc' }
  })
  
  return NextResponse.json(products)
}