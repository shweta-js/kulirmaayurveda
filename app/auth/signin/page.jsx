'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await signIn('credentials', {
      email, password, redirect: false
    })
    if (result.ok) router.push('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ayurveda-cream">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center text-ayurveda-earth mb-6">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
            className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full btn-primary">Sign In</button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Admin: kulirmamohan@gmail.com / admin123
        </p>
      </div>
    </div>
  )
}