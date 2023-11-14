import React, { Suspense } from 'react';
import ProductCard from '@/app/ui/ProductPage/ProductCard';
import SkeletonForProducts from '../../skeletons/SkeletonForProducts';

const Product = ({ products, page, pageCount, setPage }) => {
  return (
    <div>
     
        <div className='grid grid-cols-1 grid-rows-1 h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
          {products?.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
        <div className='mt-5'>
          <button
            className={`mr-5 px-2 py-1 bg-secondary-500 text-white-300 ${
              page <= 1 ? 'cursor-not-allowed disabled bg-secondary-200' : ''
            }`}
            onClick={() => {
              if (page > 1) {
                setPage((prevPage) => prevPage - 1);
              }
            }}
          >
            Prev
          </button>
          <button
            className={`mt-5 px-2 py-1 bg-secondary-500 text-white-300 ${
              pageCount === page ? 'cursor-not-allowed disabled bg-secondary-200' : ''
            }`}
            onClick={() => {
              if (page !== pageCount) {
                setPage((prevPage) => prevPage + 1);
              }
            }}
          >
            Next
          </button>
        </div>
     
    </div>
  );
};

export default Product;
