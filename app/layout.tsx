import './globals.css'

export const metadata = {
  title: 'Yasser Home Page',
  description: 'Generated with love by vercel',
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
