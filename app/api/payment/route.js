import Razorpay from 'razorpay'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

const prisma = new PrismaClient()

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export async function POST(request) {
  const session = await getServerSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const { orderId, total } = await request.json()
  
  try {
    const razorpayOrder = await razorpay.orders.create({
      amount: total * 100, // Convert to paise
      currency: 'INR',
      receipt: orderId,
      payment_capture: 1
    })
    
    await prisma.order.update({
      where: { id: orderId },
      data: { razorpayOrderId: razorpayOrder.id }
    })
    
    return NextResponse.json({ order: razorpayOrder })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}