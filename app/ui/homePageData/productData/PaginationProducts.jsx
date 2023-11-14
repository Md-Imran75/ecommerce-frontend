'use client'
import  { Suspense } from 'react';
import Wrapper from '@/app/ui/wrapper/Wrapper';
import getProducts from '@/app/lib/getProducts';
import { useState , useEffect } from 'react';
import Product from './Product';
import SkeletonForProducts from '../../skeletons/SkeletonForProducts';





export default  function PaginationProducts() {
  
  const [page, setPage] = useState(1);
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
   <div  //main div
    > 
    
    

    {/* Product Card Add */}
    <div className='bg-background-500  py-10'>
    <Wrapper>
    <div className='bg-white-500 border font-roboto border-white-600 py-10 px-4 md:px-10'>
    <div>
      <h1 className='text-2xl uppercase font-md font-bold'>Latest Bike</h1>
      <p>Choice your favorite bike</p>
    </div>
    <Suspense fallback={<SkeletonForProducts />}>
        <Product setPage={setPage} page={page} pageCount={pageCount} products={products} />
    </Suspense>
    </div>
    </Wrapper>
   
    </div>
    {/* Product Card End */}

 
   </div>
  );
}
