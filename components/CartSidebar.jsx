'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CartSidebar({ isOpen, onClose }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    if (isOpen) {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCart(savedCart)
    }
  }, [isOpen])

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold">Your Cart</h2>
                <button onClick={onClose} className="text-gray-500">&times;</button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <p className="text-center text-gray-500">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold">₹{item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {cart.length > 0 && (
                <div className="border-t p-4">
                  <div className="flex justify-between mb-4">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">₹{total}</span>
                  </div>
                  <Link href="/checkout" onClick={onClose} className="block w-full btn-primary text-center">
                    Checkout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}