import React from "react";
import '../styles/globals.css'

export const metadata = {
  title: 'Amazon Web Scraper',
  description: 'The React Framework for Production',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
