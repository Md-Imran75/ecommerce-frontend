
import React from 'react'
import Wrapper from '@/app/ui/wrapper/Wrapper'
import getAnything from '@/app/lib/getAnything'
import Image from 'next/image'





const ProductDetailsPage = async({params}) => {

 
 
 

    const blogSlug = params.slug
    const res = await getAnything(`/api/blogs?populate=*&[filters][slug][$eq]=${blogSlug}`)
    const data = await res?.data
    
    console.log(data)
       
 
  
  
 
 
   

  return (

    <div className='w-full mt-[30px]   md:my-0 md:py-20'>
    <Wrapper className='border py-10 font-roboto border-background-500'>
       <div>
        <div className='flex justify-between'>
          <div className='w-0 md:w-1/5'></div>
          <div className='w-full md:w-3/5 h-[350px]'>
          <Image
          src={data?.[0]?.attributes?.image?.data?.attributes?.url}
          alt={data?.[0]?.attributes?.title}
          height={1000}
          width={500}
          />
          </div>
          <div className='w-0 md:w-1/5'></div>
        </div>
        <div className='mt-5 mb-0 font-bold text-md md:text-xl'>
          {data?.[0]?.attributes?.title}
        </div>
        <div className='mb-10 text-[12px] text-center rounded-md shadow-sm bg-primary-500 w-[100px]'>
          {data?.[0]?.attributes?.date}
        </div>
        <div className='text-[12px] md:text-[15px]'>
          {data?.[0].attributes?.description}
        </div>
       </div>

    </Wrapper>
    </div>
  )
}

export default ProductDetailsPage