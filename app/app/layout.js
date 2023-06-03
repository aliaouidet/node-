'use client';
import './globals.css'
import Navbar from "../components/Navbar"
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "use-shopping-cart"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <CartProvider shouldPersist={true} >
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
       </CartProvider > 
       <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}   