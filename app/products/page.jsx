'use client'
import React from 'react'
import getProducts from '@/app/lib/getProducts'
import ProductCard from '@/app/ui/ProductPage/ProductCard'
import Wrapper from '@/app/ui/wrapper/Wrapper'
import { useState , useEffect } from 'react'

const Products = () => {
  let [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [pageCount , setPageCount] = useState(0)
  
 
  const fetchProducts = async (pageNumber) => {
    const response = await getProducts(pageNumber);
    const productsData = await response?.data;
    setProducts(productsData);
    setPageCount(response.meta.pagination.pageCount)
    
   
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);
  
  
  
  
  return (
    <div>
      <Wrapper>
    <div
       className='grid grid-cols-1  grid-rows-1 h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5   md:my-14 px-5   md:px-0 '
     >
         {products?.map((item) => {
         return (
          <ProductCard key={item.id} data={item} className='h-full' />
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
    </Wrapper>
    </div>
  )
}

export default Products