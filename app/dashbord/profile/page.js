'use client'
import React, { useEffect } from 'react'
import { isJwtTokenPresent, userData } from '@/utils/Helper'



const Profile = () => {
    
    useEffect(() => {
        if (!isJwtTokenPresent()) {
            if(typeof window !== 'undefined'){
              window.location.href = '/';
              return null;
            }
          }
        
    } , [isJwtTokenPresent])

  return (
    <div>Profile</div>
  )
}

export default Profile