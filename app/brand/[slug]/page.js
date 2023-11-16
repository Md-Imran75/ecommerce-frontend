'use client'
import React from 'react'
import getAnything from '@/app/lib/getAnything'
import Link from 'next/link'
import Image from 'next/image'
import getBrandsForPagination from '@/app/lib/getBrands'
import BrandDataForPagination from '@/app/ui/brand/BrandDataForPagination'
import { useState, useEffect } from 'react'
import Wrapper from '@/app/ui/wrapper/Wrapper'

const BrandDetalsPage = ({params}) => {
   

  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [pageCount , setPageCount] = useState(0)
  const brandSlug = params.slug

  const fetchCategories = async (pageNumber) => {

    const response = await getBrandsForPagination(brandSlug,pageNumber);
    const categoriesData = await response?.data;
    setCategories(categoriesData);
    setPageCount(response.meta.pagination.pageCount)
  };

  useEffect(() => {
    fetchCategories(page);
  }, [page]);

  return (
    <div className=' font-roboto py-10  '>
       <Wrapper>
        <div className='border text-lg font-bold uppercase  bg-white-500  border-background-500 px-5 py-5'>
        <div className='text-center border-b border-b-background-500 pb-2'>{brandSlug}</div>
        <div>
            
            <BrandDataForPagination page={page} pageCount={pageCount} setPage={setPage} data={categories} />
            
        </div>
        </div>
        </Wrapper>
    </div>
  )
}

export default BrandDetalsPage