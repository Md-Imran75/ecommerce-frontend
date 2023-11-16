'use client'
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { GiShoppingBag } from 'react-icons/gi'
import MobileCartDesign from '../cart design/MobileCartDesign';


const MobileCart = () => {
  const [mobileCartOpen , setMobileCartOpen] = useState(false)

  return (
    <div
    className=' z-20 fixed flex  justify-between items-center visible md:invisible lg:absolute right-0 bottom-0 h-[50px] font-extrabold cursor-pointer  text-primary-100  rounded-sm shadow-md w-full bg-primary-100'
    >

        <div  
        onClick={() => setMobileCartOpen(true)}
        className=' text-4xl '>
           <GiShoppingBag className='mx-4 text-secondary-400' /> 
        </div>

        {mobileCartOpen &&
          <MobileCartDesign setMobileCartOpen={setMobileCartOpen} />
          }

        <div className='text-sm text-center py-1  text-primary-100 bg-secondary-400'>
        <Link href={'/products'}>
        <p className='px-4 font-roboto text-[15px]' >
         Countinue Shopping
        </p>
        </Link>
        </div>

        

    </div>
    
  )
}

export default MobileCart;