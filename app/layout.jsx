import NavBar from '@/components/NavBar'
import React from 'react'
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

export const metadata = {
  title: "BHome - Choose property at your earliest convenience",
  description: "Find and rent properties",
  keywords: "rental, property rental, properties"
}

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body>
        <AuthProvider>
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

export default Layout
