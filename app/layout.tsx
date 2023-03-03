import React from "react";
import '../styles/globals.css'
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export const metadata = {
  title: 'Amazon Web Scraper',
  description: 'The React Framework for Production',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-[#f7fbff] h-screen">
        <Sidebar />
        <main className="p-10 max-w-7xl w-full mx-auto">
           <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
