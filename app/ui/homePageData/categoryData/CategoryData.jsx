'use client'
import React from 'react'
import getCategories from '@/app/lib/getCategories'
import CategoryDataDesign from './CategoryDataDesign'
import Wrapper from '../../wrapper/Wrapper'
import { useState , useEffect } from 'react';

const CategoryData = () => {

  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [pageCount , setPageCount] = useState(0)

  const fetchCategories = async (pageNumber) => {
    const response = await getCategories(pageNumber);
    const categoriesData = await response?.data;
    setCategories(categoriesData);
    setPageCount(response.meta.pagination.pageCount)
  };

  useEffect(() => {
    fetchCategories(page);
  }, [page]);
    
  return (
    <div>
      <Wrapper>
       <div className='border border-white-600 px-5 py-10'>
       <CategoryDataDesign data={categories} page={page} pageCount={pageCount} setPage={setPage} />
       </div>
      </Wrapper>
    </div>
  )
}

export default CategoryData