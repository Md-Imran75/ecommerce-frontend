import React from 'react'
import getProducts from '@/app/lib/getProducts'
import ProductCard from '@/app/ui/ProductPage/ProductCard'
import Wrapper from '@/app/ui/wrapper/Wrapper'

const Products = async() => {
  const response = await getProducts()
  const products = await response?.data
 
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
    </Wrapper>
    </div>
  )
}

export default Products