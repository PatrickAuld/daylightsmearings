'use client'

import { useState } from 'react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('Thanks for signing up!')
        setEmail('')
      } else {
        setStatus('Something went wrong.')
      }
    } catch (err) {
      console.error(err)
      setStatus('Something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 border border-gray-300 rounded mb-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">
        Sign Up
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  )
}
