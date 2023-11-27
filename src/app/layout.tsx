import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {AuthProvider} from "@/hook/AuthContext";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Magic Post',
  description: 'Magic Post app',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <AuthProvider>
      <body suppressHydrationWarning={true} className={inter.className}>{children}
      </body>
    </AuthProvider>
    </html>
  )
}
