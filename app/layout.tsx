import './globals.css'
import type { Metadata } from 'next'

// Use the default sans serif font stack instead of fetching fonts from Google.

export const metadata: Metadata = {
  title: 'Daylights Smearings',
  description: 'The healthy and safe way to change clocks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
