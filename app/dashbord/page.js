'use client'
import React from 'react'
import { isJwtTokenPresent, userData } from '@/utils/Helper'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const Dashbord = () => {
  

  if (!isJwtTokenPresent()) {
    if(typeof window !== 'undefined'){
      window.location.href = '/';
      return null;
    }
  }

  const {name , username} = userData()
  
  return (
    <div>
      <div>{name}</div>
      <Link href={'/dashbord/profile'}><div>Profile</div></Link>
      <Link href={'/dashbord/order'}><div>Order</div></Link>

    </div>
  )
}

export default Dashbord