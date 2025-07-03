import NavBar from '@/components/NavBar'
import React from 'react'
import '@/assets/styles/globals.css'

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
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default Layout
