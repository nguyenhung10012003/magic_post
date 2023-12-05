import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {AuthProvider} from "@/hook/AuthContext";
import {ThemeContext} from "@/hook/ThemeContext";

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
    <html lang="en" suppressHydrationWarning>

    <body className={`bg-backDropColor ${inter.className}`} suppressHydrationWarning={true}>
      <ThemeContext>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ThemeContext>
    </body>

    </html>
  )
}
