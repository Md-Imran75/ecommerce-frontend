'use client'
import React, { useState , useMemo } from 'react'
import { BsCart } from 'react-icons/bs'
import CartDesign from '../cart design/CartDesign'
import { useSelector } from 'react-redux'

const Cart = () => {
  const [cartOpen , setCartOpen] = useState(false)
  const {cart} = useSelector((state => state.cart))
  
  const subTotal = useMemo(() => {
    return cart.reduce((total , val) => total + val.attributes.price , 0 )
  }, [cart])

  return (
   <div>
     <div
    className=' z-20 absolute invisible md:visible md:fixed right-0 top-80 h-[110px] font-extrabold cursor-pointer  text-primary-100  rounded-sm shadow-md w-[100px] bg-secondary-500'
    onClick={() => setCartOpen(true)}
    >

        <div className='mt-3 ml-9 text-2xl'>
           <BsCart/> 
        </div>
        
        <div className='text-sm mt-3 px-1  text-secondary-500 bg-primary-400'>
        <div className='ml-3' >

        <div>
        {cart.length < 1 && 
         <div>
          {`0 Bike`}
         </div>
         } 

         {cart.length === 1 && 
          <div>
             <div>
          {`${cart.length} Bike`}
         </div>
         </div>
         } 
         {cart.length > 1 && 
         <div>
         <div>
          {`${cart.length} Bikes`}
         </div>
          </div>
         }
        </div>
        
        </div>
        </div>

        <div className='text-sm mt-3 px-1  text-secondary-500 bg-primary-400'>
        <p className='ml-3 text-[8px]' >
           &#2547;{subTotal}
        </p>
        </div>
        </div>
       
        {/* Cart add */}

          { cartOpen && <CartDesign setCartOpen={setCartOpen} />}


   </div>
    
  )
}

export default Cart