
import React from 'react'
import Image from 'next/image'

const LogoDesign = () => {
  
  return (
    <div>
        <Image
        src={'/logo.png'}
        alt={'home logo'}
        height={70}
        width={70}
        loading='lazy'
        />
    </div>
  )
}

export default LogoDesign