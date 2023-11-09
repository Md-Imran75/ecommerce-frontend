'use client'
import React from 'react'
import { isJwtTokenPresent } from './Helper'
import { useEffect } from 'react'
const ProtectRoute = ({children}) => {
    useEffect(() => {
        if (!isJwtTokenPresent()) {
            if(typeof window !== 'undefined'){
              window.location.href = '/';
              return null;
            }
          }
        
    } , [isJwtTokenPresent])

    return(
        <div>{children}</div>
    )
}

export default ProtectRoute