
'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getBrands } from '@/app/lib/getBrands'


const Brand = ({categoryMenu , setCategoryMenu}) => {
  
    
     
    const [data, setData] = useState([])

  const fetchBrands = async () => {
    try {
      const res = await getBrands()
      const data = await res?.data
      setData(data)
      return data
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  

  useEffect(() => {
    fetchBrands()
  }, [])

  if (!data) {
    return null
  }
  

  return (
    <div>
      {categoryMenu ? (
        <div className='w-full md:w-[300px] overflow-y-scroll shadow-lg scroll-smooth top-0 md:top-[75px]  px-3 py-3 absolute z-50 bg-white-500'>
        <div className='flex justify-between'>
        <div className='mb-5 text-lg uppercase font-bold font-roboto'>All Brand</div>
        <div className='w-[15px] h-[10px] mr-10'><button className='bg-primary-500 text-[12px] px-1' onClick={() => setCategoryMenu(false)}>Close</button></div>
        </div>
  
        <div>
          {data?.map((item) => (
            
            <Link key={item.id} href={`/brand/${item.attributes.slug}`}>
            <div className='flex justify-start gap-5 text-sm font-roboto  border-t-[3px] border-t-background-500 px-1 py-2' >
              <div>
              <Image
              height={50}
              width={50}
              src={item.attributes.image.data.attributes.url}
              alt={item.attributes.name}
              
              />
              </div>
              <div className='flex justify-between w-full'>
              <div>
              {item.attributes.name}
              </div>
               <div>
                {`(${item.attributes.categories.data.length})`}
               </div>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      ) : ''}
    </div>
  )
}

export default Brand
