'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [cart, setCart] = useState([])
  const [address, setAddress] = useState({
    fullName: '', phone: '', address: '', city: '', state: '', pincode: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) setCart(JSON.parse(savedCart))
  }, [])

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    setLoading(true)
    
    // Create order in database
    const orderRes = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart, total, address })
    })
    const order = await orderRes.json()
    
    // Create Razorpay order
    const paymentRes = await fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: order.id, total })
    })
    const razorpayOrder = await paymentRes.json()
    
    const scriptLoaded = await loadRazorpayScript()
    if (!scriptLoaded) {
      alert('Failed to load payment gateway')
      setLoading(false)
      return
    }
    
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: razorpayOrder.order.amount,
      currency: 'INR',
      name: 'Kulirma Ayurveda',
      description: `Order #${order.id}`,
      order_id: razorpayOrder.order.id,
      handler: async (response) => {
        await fetch('/api/orders/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: order.id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature
          })
        })
        localStorage.removeItem('cart')
        router.push('/dashboard?payment=success')
      },
      prefill: {
        name: address.fullName,
        email: session?.user?.email,
        contact: address.phone
      },
      theme: { color: '#2D6A4F' }
    }
    
    const razorpay = new window.Razorpay(options)
    razorpay.open()
    setLoading(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-ayurveda-earth mb-8">Checkout</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" 
              onChange={e => setAddress({...address, fullName: e.target.value})} />
            <input type="tel" placeholder="Phone" className="w-full p-2 border rounded" 
              onChange={e => setAddress({...address, phone: e.target.value})} />
            <textarea placeholder="Address" className="w-full p-2 border rounded" rows={3}
              onChange={e => setAddress({...address, address: e.target.value})} />
            <input type="text" placeholder="City" className="w-full p-2 border rounded" 
              onChange={e => setAddress({...address, city: e.target.value})} />
            <input type="text" placeholder="State" className="w-full p-2 border rounded" 
              onChange={e => setAddress({...address, state: e.target.value})} />
            <input type="text" placeholder="Pincode" className="w-full p-2 border rounded" 
              onChange={e => setAddress({...address, pincode: e.target.value})} />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            <button onClick={handlePayment} disabled={loading}
              className="w-full btn-primary mt-4">
              {loading ? 'Processing...' : `Pay ₹${total}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}