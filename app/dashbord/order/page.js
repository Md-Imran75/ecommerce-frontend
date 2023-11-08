'use client'
import React, { useEffect } from 'react'
import { isJwtTokenPresent, userData } from '@/utils/Helper'



const Order = () => {
    
    useEffect(() => {
        if (!isJwtTokenPresent()) {
            if(typeof window !== 'undefined'){
              window.location.href = '/';
              return null;
            }
          }
        
    } , [isJwtTokenPresent])

  return (
    <div>Order</div>
  )
}

export default Order