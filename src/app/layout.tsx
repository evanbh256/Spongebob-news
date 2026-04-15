import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SQUAREPANTS SCANDAL: Is a High-School Dropout Vying for the Nuclear Codes? | Fox News',
  description: 'EXCLUSIVE: While the mainstream "Bubble Media" continues to fete Presidential candidate SpongeBob SquarePants...',
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
