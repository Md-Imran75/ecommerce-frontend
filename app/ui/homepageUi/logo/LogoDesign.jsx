
import React from 'react'
import Image from 'next/image'

const LogoDesign = () => {
  
  return (
    <div>
        <Image
        src={'/logo.png'}
        alt={'home logo'}
        height={50}
        width={80}
        loading='lazy'
        />
    </div>
  )
}

export default LogoDesign