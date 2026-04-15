import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'California AB 2624 dubbed Stop Nick Shirley Act targets journalists | Fox News',
  description: 'The bill was authored by Assemblymember Mia Bonta, wife of California Attorney General Rob Bonta',
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
