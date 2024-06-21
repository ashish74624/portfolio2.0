import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Ashish Kumar',
  description: 'This is my portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark'>{children}</body>
    </html>
  )
}
