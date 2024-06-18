import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Smooth Path Digital',
  description: 'Let us smooth your digital path',
  openGraph: {
    url: 'https://www.smpath.com',
    title: 'Smooth Path Digital',
    description: 'Let us smooth your digital path',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="fb:app_id" content="2069926326678836" />
        <meta name="apple-itunes-app" content="app-id=6474421119" />
      </head>
      <body className={`bg-night ${inter.className}`}>{children}</body>
    </html>
  )
}
