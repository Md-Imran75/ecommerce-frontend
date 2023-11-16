'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategoriesForNavbar } from '@/app/lib/getCategories'
import Image from 'next/image'


const Category = () => {
  const [data, setData] = useState([])

  const fetchCategories = async () => {
    try {
      const res = await getCategoriesForNavbar()
      const data = await res?.data
      setData(data)
      return data
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  console.log(data)

  useEffect(() => {
    fetchCategories()
  }, [])

  if (!data) {
    return null
  }

  return (
    <div className='w-[300px] shadow-lg scroll-smooth snap-y top-[75px] scroll-m-0 px-3 py-3 absolute z-50 bg-white-500'>
      <div className='mb-5 text-lg font-bold font-roboto'>All Model</div>

      <div>
        {data.map((item) => (
          
          <div className='flex justify-start gap-5 text-sm font-roboto border-t-[3px] border-t-background-500 px-1 py-1' key={item.id}>
            <div>
            <Image
            height={50}
            width={50}
            src={item.attributes.image.data.attributes.url}
            alt={item.attributes.name}
            
            />
            </div>
            <div>
            {item.attributes.name}
            </div>
            
            </div>
        ))}
      </div>
    </div>
  )
}

export default Category
