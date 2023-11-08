import React from 'react'
import { GiShoppingBag } from 'react-icons/gi'

const MobileCart = () => {
  return (
    <div
    className=' z-20 fixed flex  justify-between items-center visible lg:invisible lg:absolute right-0 bottom-0 h-[50px] font-extrabold cursor-pointer  text-primary-100  rounded-sm shadow-md w-full bg-primary-100'
    >

        <div className=' text-4xl '>
           <GiShoppingBag className='mx-4 text-secondary-400' /> 
        </div>

        <div className='text-sm text-center py-1  text-primary-100 bg-secondary-400'>
        <p className='px-4 font-roboto text-[15px]' >
         Countinue Shopping
        </p>
        </div>

        

    </div>
    
  )
}

export default MobileCart;