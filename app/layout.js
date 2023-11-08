'use client'
import Navbar from '@/components/HomeStyles/Navbar'
import './globals.css'
import { Inter, } from 'next/font/google'
import Cart from '@/components/cart/Cart'
import MobileCart from '@/components/cart/MobileCart'
import Footer from '@/components/footer/Footer'
import store from '@/store/store'
import { Provider } from 'react-redux'
import { metadata } from './meta'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




const inter = Inter({ subsets: ['latin'] })





export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      
      <body suppressHydrationWarning={true} className={inter.className}>
      <Provider store={store} >
        
        <Navbar/>
        <Cart/>
        <MobileCart/>
              {children}
        <Footer/>
        <ToastContainer/>
        </Provider>
        </body>
       
    </html>
  )
}
