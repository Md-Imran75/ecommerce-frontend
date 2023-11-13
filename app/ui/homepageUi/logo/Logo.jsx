
import React from 'react'
import getAnything from '@/app/lib/getAnything'
import LogoDesign from './LogoDesign'

const Logo = async() => {
  
  const res = await getAnything('/api/logo?populate=*')
  const data = await res?.data
  const image = await data?.attributes?.image?.data
    console.log(image)
  
  return (
    <div>
          <LogoDesign image={image} />
    </div>
  )
}




export default Logo