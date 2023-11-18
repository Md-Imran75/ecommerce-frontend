'use client'
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import getBlogsForPagination from '../lib/getBlogs';
import Wrapper from '../ui/wrapper/Wrapper';
import Link from 'next/link';

const Blogs = () => {

    
    let [page, setPage] = useState(1);
    const [blogs, setBlogs] = useState([]);
    const [pageCount , setPageCount] = useState(0)
    
   
    const fetchBlogs = async (pageNumber) => {
      const response = await getBlogsForPagination(pageNumber);
      const blogsData = await response?.data;
      setBlogs(blogsData);
      setPageCount(response.meta.pagination.pageCount)
      
     
    };
  
    useEffect(() => {
      fetchBlogs(page);
    }, [page]);
    

  return (
    <div className='mt-[50px]'>
      <Wrapper>
    <div className='border border-white-600 px-5 py-10'>
      <div className='mb-5 text-xl md:text-3xl text-center font-roboto text-neutral-500'>
        Our Latest Blogs
      </div>
    <div
       className='grid grid-cols-1   grid-rows-1 h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5   px-5   md:px-0 '
     >
         {blogs?.map((item) => {
         return (
               <>
               <div key={item.id}>
                <Link href={`/blog/${item.attributes.slug}`} >
                <div>
                    <Image
                    src={item.attributes.image.data.attributes.url}
                    alt={item.attributes.title}
                    height={500}
                    width={500}
                    />
                </div>
                <div className='my-2 text-[10px] md:text-[12px]'>
                  {item.attributes.date}
                </div>
                <div className='text-[12px] md:text-[15px]'>
                {item.attributes.title.length > 40 ? (`${item.attributes.title.slice(0, 50)}...`) : item.attributes.title}
                </div>
                </Link>
               </div>
               </>
             );
          })}
          
      </div>
      <div className='mt-5'>
        <button className={`mr-5 px-2 py-1 bg-secondary-500 text-white-300 ${page<=1 ? 'cursor-not-allowed disabled  bg-secondary-300' : ''}`} onClick={() => {
          if(page > 1){
            setPage((prevPage) => prevPage - 1)
          }
        }} >Prev</button>
        <button className={`mt-5 px-2 py-1 bg-secondary-500 text-white-300 ${pageCount === page ? 'cursor-not-allowed disabled  bg-secondary-300' : ''}`} onClick={() => {
          if(page !== pageCount){
            setPage((prevPage) => prevPage + 1)
          }
        }}>Next</button>
      </div>
    </div>
    </Wrapper>
    </div>
  )
}

export default Blogs